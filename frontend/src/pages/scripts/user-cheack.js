import Cookies from 'js-cookie'
export async function checkUser(){

 const theCookie = Cookies.get('VFC')

 try {
    const sendInformation =await fetch("http://localhost:3000/checkUsers",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({token:theCookie})
    }) 
    const responce =await sendInformation.json()
    const catchUser = responce.message.userInfo
    console.log()
    if(catchUser){
        document.getElementById("buttons").style.display="none"
        document.getElementById("email-display").innerText=catchUser.email

    }else{
        document.getElementById("profile").style.display="none"
    }

 } catch (error) {
    return 0;
 }
}
