import Cookie from 'js-cookie'
export const checkCookie = ()=>{
    const cookie = Cookie.get("VFC")
    if(cookie){
        console.log("posting jobs")
    }else{
        window.location.href="/"
    }
}

