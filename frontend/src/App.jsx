
//Import some extension
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import PostJobs from './pages/post-job'
const home_interface = ()=>{  //Home Interface Function
  return(<>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/post-jobs' element={<PostJobs/>}></Route>
</Routes>


  </>)
}

export default home_interface