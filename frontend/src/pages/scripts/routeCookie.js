import Cookie from 'js-cookie'

export const routeCookie = ()=>{
    const cookieFinder = Cookie.get("VFC")
    if(cookieFinder){
       window.alert("First Logout Current Account")
        window.location.href="/"

    }else{
        console.log("login")
    }
}