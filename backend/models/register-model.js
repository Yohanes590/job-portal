const mongoose = require('mongoose')
const register = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    jobPost:{
        type:Array
    },
    applyJobs:{
        type:Array
    },
    accountStatus:{
        type:String
    }
})
const register_user = mongoose.model('User' ,register)
module.exports=register_user;