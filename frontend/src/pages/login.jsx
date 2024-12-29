import '../styles/register.css';
import 'boxicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {routeCookie} from './scripts/routeCookie'


const login_authentication_process =async() => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const userInformation = {email:email,password:password}

    const Server_responce_request = await fetch('http://localhost:3000/login',{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(userInformation)
    })

    const result = await Server_responce_request.json()
    const fetchToken = result.token;
    const message = result.message
    if(message == 'success login'){
        document.cookie=`VFC=${fetchToken};max-age=3600`
        toast.success("Login Success", { position: "top-right" });
        setTimeout(() => {
            window.location.href="/"
        }, 3000);
    }else if(message == "disable-account"){
        toast.error("Account disabel by admin", { position: "top-right" });
    }else{
        toast.error("Wrong Email Or Password", { position: "top-right" });
    }

};


const Login = () => {
    routeCookie()
    return (
        <>
            <div className="window-part">
                <div className="box">
                    <div className="input-box">
                        <h1 id="blue">Login</h1>
                        <div className="inputs">
                            <div className="input-border">
                                <input type="email" placeholder='Email' id='email' />
                                <box-icon name='envelope' color="var(--blue)" size="md"></box-icon><br />
                            </div>
                            <div className="input-border">
                                <input type="password" placeholder='Password' id="password" />
                                <box-icon name='key' color="var(--blue)" size="md" animation="tada"></box-icon><br />
                            </div>
                            <button onClick={login_authentication_process}>Login</button>
                            <p><br />I don't Have Account <a href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Login;
