import {Link} from 'react-router-dom';
function Navbar({isLoggedIn,isAdmin ,onLogout}) {
  return (

    <div>
      <h1>Byteflow007</h1>
    if(isLoggedIn){
      (isAdmin)?
      <div>
        <Link to='/admin/createCourse'>Create Course</Link>
        <Link to='/Mycourses'>MY Courses</Link>
        <Link to='admin/StudentsData'>Students</Link>
        <Link onClick={onLogout}>Logout</Link>
      </div> :
      <div>
        <Link to='/user/mylearnings'>My Learnings</Link>
        <Link to='/courses'>Courses</Link>
        <Link onClick={onLogout}>Log out</Link>
      </div>
    }
    else{
      <div>
        <Link to='/courses'>Courses</Link>
        <Link onClick={onLogout}>Logout</Link>
      </div>
    }
      
      
    </div>

  
  )
}

export default Navbar