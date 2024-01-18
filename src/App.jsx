import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Courses from "./components/Courses/Courses.jsx";
import StudentsData from "./components/Admin/StudentsData/StudentsData.jsx";
import CreateCourses from "./components/Admin/CreateCourses/CreateCourses.jsx";
import MyCourses from "./components/Admin/MyCourses/MyCourses.jsx";
import PurchasedCourses from "./components/User/PurchasedCourses/PurchasedCourses.jsx";
import PurchaseCourse from "./components/User/PurchaseCourse/PurchaseCourse.jsx"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminNavbar from "./components/Navbar/AdminNavbar.jsx";
import UserNavbar from "./components/Navbar/UserNavbar.jsx";
import { useState } from "react";
import UserMyProfile from "./components/User/UserMyProfile/UserMyProfile.jsx";
import AdminMyProfile from "./components/Admin/AdminMyProfile/AdminMyProfile.jsx";

function App() {
 const [isLoggedIn,setIsLoggedIn]=useState(true);
 const [isAdmin,setIsAdmin]=useState(false);
  return (
    <>
      { isLoggedIn?(isAdmin?<AdminNavbar />:<UserNavbar />):<Navbar />}
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/createCourses" element={<CreateCourses />}/>
        <Route path="admin/myCourses" element={<MyCourses />}/>
        <Route path="admin/handleStudents" element={<StudentsData />}/>
        <Route path="user/myLearnings" element={<PurchasedCourses />}/>
        <Route path="user/courses" element={<PurchaseCourse />}/>
        <Route path="user/myProfile" element={<UserMyProfile />}/>
        <Route path="admin/myProfile" element={<AdminMyProfile />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
