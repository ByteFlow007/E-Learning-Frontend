import React from 'react'
import {Link} from 'react-router-dom';
function Navbar({isLoggedIn,isAdmin}) {
  return (
    <div>
      <h1>Byteflow007</h1>
    if(isLoggedIn){
      (isAdmin)?
      <div>
        <a>Create Course</a>
        <a>MY Courses</a>
        <a>Students</a>
        <a>Logout</a>
      </div> :
      <div>
        <a>My Learnings</a>
        <a>Courses</a>
        <a>Students</a>
        <a>Log out</a>
      </div>
    }
    else{
      <div>
        <a>Courses</a>
        <a>Logout</a>
      </div>
    }
      
      
    </div>
  )
}

export default Navbar