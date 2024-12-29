//load some librarys
const express = require("express")
const app = express()
const bcrypt = require('bcrypt')
require("dotenv").config()
const jwt = require("jsonwebtoken")
const cors = require('cors')
const mongoose = require('mongoose')
const public_post = require('./models/Post-manager')
//db import

const register_user = require('./models/register-model')
const { BulkWriteResult } = require("mongodb")

// the app use some extentions
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
    if (req.header.origin === 'http://localhost:5173') {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    }
    next();
  });

// get port from enviroment variables
const port = process.env.PORT




//allow For specific Link
const crosOption = {
    origin:'http://localhost:5173',
    credentials: true
}
app.use(cors(crosOption))



//routes
   


app.post("/register",async(req,res)=>{
    const salt  = await bcrypt.genSalt()
    const hasedKey = await bcrypt.hash(req.body.password,salt)
    const checkEmail = await register_user.findOne({email:req.body.email})

  try {
    if(checkEmail == null){
        const userInfo = {
            username:req.body.username,
            email:req.body.email,
            password:hasedKey,
            jobPost:[],
            applyJobs:[],
            accountStatus:"active"
        }
        await register_user.create(userInfo)
        const createNewToken = createLoginToken(userInfo)
        res.send(
            {
                massage:"success registerd",
                token:createNewToken
            }
        )
    }else{
        res.send({massage:"registerd email"})
    }
  } catch (error) {
    res.send({message:"server error"})
  }

})




const createLoginToken = (userInfo)=>{
  return  jwt.sign({userInfo},process.env.SEKRET_KEY)
}
app.post('/login',async(req,res)=>{
       try{
        const loginUser = await register_user.findOne({email:req.body.email})
        if(loginUser == null){
         res.send({message:"please re create account"})
        }else{
             if(loginUser.accountStatus == 'disable'){
                 res.send({message:"disable-account"})
             }else{
                 if(await bcrypt.compare(req.body.password,loginUser.password)){
                     const Token = createLoginToken(loginUser)
                     res.send({
                        message:"success login",
                        token:Token,
                     })
           }else{
             res.send({message:"internal server error"})
           }
         }
     }
       }catch (error){
        res.send({message:"server error"})
       }
    
})

app.post('/checkUsers',(req,res)=>{
    const resiveToken = req.body.token;
  try {
    try {
      const verifyed_token= jwt.verify(resiveToken,process.env.SEKRET_KEY)
        res.send({message:verifyed_token})
       } catch (error) {
        res.send({message:"unknown user"})
       }
  } catch (error) {
    console.log({message:error.message})
  }
})


app.post('/deleteAccount',async(req,res)=>{
  try {
   const accountCookie = req.body.accountCookie;
   const verifyedUser = jwt.verify(accountCookie , process.env.SEKRET_KEY)
   const getId = verifyedUser.userInfo._id
   const getEmail = verifyedUser.userInfo.email
   await register_user.findByIdAndDelete(getId)
   await public_post.deleteMany({PosterEmail:getEmail})

   res.send({responce:"successDeleted"})
    
  } catch (error) {
    res.send({error:error.message})
  }

})



app.post('/post-job',async(req,res)=>{

    try {
   const DecodeUser = jwt.verify(req.body.UserCookie,process.env.SEKRET_KEY) 
   const FetchUserId = DecodeUser.userInfo._id
   const userEmail = DecodeUser.userInfo.email;
   const digout = req.body.post;
   const allObject = {
     PosterEmail:userEmail,
     discription:digout.discription,
     title:digout.title
   }
   const posterId =  await public_post.create(allObject)
   const postId = posterId._id
    const result =  await register_user.findOneAndUpdate(
        {email:DecodeUser.userInfo.email},
        {$push:{jobPost:{
          postId:postId,
          title:req.body.post.title,
          discription:req.body.post.discription
        }}},
        {new:true}
       )

   res.send({message:"success posted"})

    } catch (error) {
   res.send({message:error.message})
      
    }

})

app.post('/decodeUserPost' ,async (req,res)=>{
  const userCookie = req.body.cookie    
  const DecodeUserInfo =  jwt.verify(userCookie,process.env.SEKRET_KEY)
  const FetchEmailAddress = DecodeUserInfo.userInfo.email
   const theUser = await register_user.findOne({email:FetchEmailAddress})
  res.send({theUser})
})


app.post("/delete-post",async(req,res)=>{

  try{
    
  const getCookie = req.body.cookie;
  const decodeEmail = jwt.verify(getCookie,process.env.SEKRET_KEY)
  const verifedEmail = decodeEmail.userInfo.email
  const deletingResult = await register_user.findOneAndUpdate(
    {email:verifedEmail},
    {$pull:{jobPost:{title:req.body.title}}},
    {new:true}
  )
  await public_post.findByIdAndDelete(req.body.postId)
  res.send({message:'success post deleted'})
  }catch(error){
    res.send({message:'error deleted'})
  }

})



mongoose.connect('mongodb+srv://portal:y8NnEkv5lN3U0kIk@portaldb.yp8y9.mongodb.net/?retryWrites=true&w=majority&appName=portalDB')
.then(()=>{
    console.log('Data base is connected')
}).catch((error)=>{
    console.log({message:error.message})
})

app.listen(port,()=>{
    console.log(`Server Api Starts On ${port}`)
})


// username : portal
// password : y8NnEkv5lN3U0kIk