import logo from '../photos/icon.png'
import '../styles/Post-style.css'
import {change_location,delete_cookie,settingBar,deleteAccountRequest,postWork,PostVerification,postWorkRequest,FetchAccountPost,removePost} from './scripts/action-center'
import {checkUser} from './scripts/user-cheack'
import { ToastContainer } from 'react-toastify';

function PostJobs() {
    PostVerification()
    checkUser()
    FetchAccountPost()
    return(<>
<div className="nav-bar">
        <div className="logo"><img src={logo} />
       <h1>Job Portal</h1>
        </div>

        <div id="buttons" className="buttons">
            <a href="/login">Login</a>
            <button onClick={change_location}>Register</button>
        </div>

        <div id='profile' className="profile">
            <div className="email"><p id='email-display'></p></div>
           <div className="logoutButton"> <button  onClick={delete_cookie}>Logout</button></div>
          <div onClick={settingBar} className="setting"><box-icon  name='cog' color="var(--blue)"></box-icon></div> 
        </div>
        </div>

        <div id="settingBar" className="settingBar">
            <div className="hover-buttons">
             <div className="hove" onClick={deleteAccountRequest}>Delete Account</div>
            <div className="hove"  onClick={postWork}>Post Works</div>
            <div className="hove">Jobs</div>
            </div>
        </div>



        <div className="formClass">
    <div className="inputFrom">
        <div className="input">
            <p>Job Title</p> <input type="text" id="title" placeholder='Title Here' />
        </div>  

        <div className="input">
            <p>Discription</p> <textarea type="text" id="discription" placeholder='Your Discription' />
        </div>  
        <button onClick={postWorkRequest}>Post</button>
    </div>
</div>

<hr />

<div className="postedJobs">

<h1 className='jobs-display'>Your Jobs</h1>
    <div id='flex-card-jobs' className="flex-card-jobs">

    </div>

</div>
<ToastContainer/>
       </>
    )
}

export default PostJobs