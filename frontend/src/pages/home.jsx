import '../styles/home-style.css'
import logo from '../photos/icon.png'
import samsung from '../assets/samsung_logo.png'
import adobe from '../assets/adobe_logo.png'
import amazon from '../assets/amazon_logo.png'
import accenture2 from '../assets/accenture_logo.png'
import google from '../assets/google.png'
import 'boxicons'
import {checkUser} from './scripts/user-cheack'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {change_location,delete_cookie,settingBar,deleteAccountRequest,postWork} from './scripts/action-center'


function Home(){
checkUser()


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


<div className="home-page">

        <div className="gradient">

        <div className="message">
            <h1>Over 10,000 jobs to apply</h1><br/>
            <h3>Your next career move starts right here -  Explore the best job opportunites and </h3>
            <h3>take first step to ward your future!</h3>
        <div className="flex-input-section">
                <div className="input-box">
                <box-icon name='search-alt-2' ></box-icon><input type="text" name="search-job" id="search-job" placeholder='Search for jobs'/>
                <box-icon name='location-plus' type='solid' ></box-icon> <input type="text" name="search-job" id="search-job" placeholder='Location'/>
                    <button>Search</button>
                </div>
        </div>

        </div>

        </div>

</div>



<div className="trusted-company-logos">

        <div className="box-shadow">

        <h2>Trusted By</h2>
        <img src={samsung} />
        <img src={adobe} />
        <img src={amazon} />
        <img src={accenture2} />

        </div>

</div>


<div className="lower-extention">

        <div className="flex-extention">


        <div className="costome-search">

        <div className="check-box">
        <h3>Current Search</h3>

        <div className="each-box"><input type="checkbox"/><p>Programming </p></div>
        <div className="each-box"><input type="checkbox"/><p>Data Sicence </p></div>
        <div className="each-box"><input type="checkbox"/><p>Graphics Design </p></div>
        <div className="each-box"><input type="checkbox"/><p>Accounting </p></div>
        <div className="each-box"><input type="checkbox"/><p>Marketing </p></div>
        <div className="each-box"><input type="checkbox"/><p>Cyber Security </p></div>

        </div>


        <div className="location-search">
<h3>Search By Location</h3>

        <div className="each-box"><input type="checkbox"/><p>Programming </p></div>
        <div className="each-box"><input type="checkbox"/><p>Data Sicence </p></div>
        <div className="each-box"><input type="checkbox"/><p>Graphics Design </p></div>
        <div className="each-box"><input type="checkbox"/><p>Accounting </p></div>
        <div className="each-box"><input type="checkbox"/><p>Marketing </p></div>
        <div className="each-box"><input type="checkbox"/><p>Cyber Security </p></div>

        </div>

        </div>

        <div className="listed-job-portals">
                <h1>Latest Jobs</h1>
                <p>Transform words into stunning images</p>

        <div className="job-card-section">


            <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt=""/></div>
        <div className="discription">
            <h2>Cloud Engineer</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>



             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt="" /></div>
        <div className="discription">
            <h2>Software Engineer</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>



             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt=""/></div>
        <div className="discription">
            <h2>Graphic Designer</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>



             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt=""/></div>
        <div className="discription">
            <h2>SQL Analiytics Maker</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>


             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt="" /></div>
        <div className="discription">
            <h2>Software Engineer</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>


             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt=""/></div>
        <div className="discription">
            <h2>Video Editor</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>


             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt="" /></div>
        <div className="discription">
            <h2>Full Stuck Developer</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>


             <div className="card">
        <div className="info">
        <div className="must-image"><img src={google} alt="" /></div>
        <div className="discription">
            <h2>Video Editor</h2><br/>
            <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collabora</p>
            <div className="button-section">
                <button id='apply'>Apply Now</button>
                <button id='white'>Learn More</button>
            </div>
        </div>
        </div>
             </div>





        </div>

        </div>


        </div>


</div>
<ToastContainer/>
    </>)
    
}

export default Home