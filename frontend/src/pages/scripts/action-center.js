import Cookie from 'js-cookie'
import { toast } from 'react-toastify';
export const change_location = ()=>{
    window.location.href="/register"
}

  export const delete_cookie = ()=>{
        if(confirm('are you sure to logout')){
            Cookie.remove('VFC')
            window.location.href="/"
        }else{
            window.alert("cancel process")
        }
    }

   export const settingBar =()=>{
        const height = document.getElementById("settingBar").style.height
    if(height == ''){
        document.getElementById("settingBar").style.height="150px"
    }else{
        document.getElementById("settingBar").style.height=''
    }
    }

    export async function deleteAccountRequest(){
        const accountCookie = Cookie.get("VFC")
    if(confirm("are you sure to delete this account")){
        await fetch("http://localhost:3000/deleteAccount",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({accountCookie:accountCookie})
        })
        Cookie.remove("VFC")
        toast.warning("Success deleted account",{position:"top-right"})
        window.location.href='/'
    
    }else{
        window.alert("process canceled")
    }
    }

    export const postWork=()=>{
        window.location.href="post-jobs"
    }

    export async function postWorkRequest() {
        const GetCookieAccess = Cookie.get('VFC')
        const title = document.getElementById("title").value;
        const discription = document.getElementById("discription").value;
        
        if(title == ""){
            toast.error('Please input the job title',{position:"top-right"})
        }else if(discription == ""){
            toast.error('plase input job discription ' ,{position:"top-right"})
        }else if(discription.length < 40){
            toast.error('please explain about job')
        }else{
            const sendJob = await fetch("http://localhost:3000/post-job",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    UserCookie:GetCookieAccess,
                    post:{
                        title:title,
                        discription:discription,
                    }
                })
             })
             const result = await sendJob.json()
             if(result.message == "success posted"){
            toast.success("Success Job Posted",{position:"top-right"})
            window.location.reload()
             }else{
                toast.error("An occurred error please logout and login again" , {position:"top-right"})
             }
        }


     }    


     export const PostVerification = ()=>{
        const findCookie = Cookie.get("VFC")
        if(!findCookie){
            window.location.href="/"
        }else{
            return 0;
        }
     }


     export async function FetchAccountPost (){
        const get_user_cookie = Cookie.get("VFC")
            const sendCookie = await fetch('http://localhost:3000/decodeUserPost',{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({cookie:get_user_cookie})
            })
            const serverResponce = await sendCookie.json()
            const UserJobPost =serverResponce.theUser.jobPost;
            UserJobPost.forEach(arrays=>{
                const LoopTitle = arrays.title
                const LoopDiscription = arrays.discription

                const AppendElement = document.getElementById("flex-card-jobs")
                const divAppend = document.createElement("div")
                divAppend.className="job-card"
                divAppend.innerHTML=`
                    <div className="job-card">
    <div className="discription">
        <h2>${LoopTitle}</h2><br/>
        <p>${LoopDiscription}</p>
        <div className="button-section">
            <button class='delete'>Delete Post</button>
        </div>
    </div>
    </div>
                `
                document.getElementById("flex-card-jobs").appendChild(divAppend)
                 const RemovePost = divAppend.querySelector(".delete")
                 RemovePost.addEventListener("click",()=>removePost(arrays.title,arrays.postId))
            })
           
                
     }

     
export async function removePost(title,postId){

    const cookie = Cookie.get("VFC")

    if(confirm(`are you sure to delete this post ${title}`)){
        const sendTitle = await fetch("http://localhost:3000/delete-post",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title:title,cookie:cookie,postId:postId})
        })
        const serverResult = await sendTitle.json()
        if(serverResult.message == "success post deleted"){
        toast.success('Process Cancel Success',{position:"top-right"})
            window.location.reload()
        }else{
            console.log(serverResult)
        }
    }else{
        toast.success('Process Cancel Success',{position:"top-right"})
    }
}