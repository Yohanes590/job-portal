import '../styles/register.css'
import 'boxicons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const register_toServer =async()=>{

    const email = document.getElementById("email").value;
    const username= document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_passkey = document.getElementById("confirm-key").value;
   if(username == ""){
    toast.error("Valid User Name", { position: "top-right" });
   }else if(email == ""){
    toast.error("Valid Email", { position: "top-right" });
   }else if(password == ""){
    toast.error("Valid Password", { position: "top-right" });
   }else if(confirm_passkey ==""){
    toast.error("Confirm Password", { position: "top-right" });
   }else if(password != confirm_passkey){
    toast.error("Not Same Passkey", { position: "top-right" });
   }else{
    const registerd_user = {
        email:email,
        username:username,
        password:password
    }

    const server_responce = await fetch("http://localhost:3000/register",{
        method:"post",
        credentials: 'include',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(registerd_user)
    })

    const server_result = await server_responce.json()
    const getMessage = server_result.massage
    if(getMessage == 'success registerd'){
    document.cookie=`VFC=${server_result.token};max-age=3600`
            toast.success("Account Regiser Success", { position: "top-right" });
            setTimeout(() => {
                window.location.href="/"
            }, 3000);
     }else if(getMessage == 'registerd email'){
        toast.error("Regisered Email", { position: "top-right" });
     }else if(getMessage == "account disable"){
        toast.error("Account Is Disabled By Admin", { position: "top-right" });
     }else{
        toast.error("Internal Server Error", { position: "top-right" });
     }
   }
}

function Register(){
    return(<>
        
<div className="window-part">

        <div className="box">

        <div className="input-box">
                <h1 id="blue">Register</h1>

                <div className="inputs">
                    <div className="input-border"><input type="text" placeholder='User Name' id='username'/><box-icon color="var(--blue)"  size="md" name='user-circle' type='solid' ></box-icon><br/></div>
                    <div className="input-border"><input type="email" placeholder='Email'id='email'/><box-icon name='envelope' color="var(--blue)" size="md" ></box-icon><br/></div>
                    <div className="input-border"><input type="password" placeholder='Password' id='password'/><box-icon name='key' color="var(--blue)" size="md" animation="tada"></box-icon><br/></div>
                    <div className="input-border"><input type="password" placeholder='Confirm' id='confirm-key'/><box-icon name='key' type='solid' color="var(--blue)" size="md"></box-icon></div>
                    <button onClick={register_toServer}>Sign Up</button>
                    <p><br/>Already Have Account <a href="/login">Login</a></p>
                </div>

        </div>

        </div>

</div>
<ToastContainer />


    </>)
}

export default Register