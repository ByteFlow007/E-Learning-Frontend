import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Signin from "./components/Signin/Signin.jsx";
import SignInSuccessMessage from "./components/Signin/SignInSuccessMessage.jsx";
import Signup from "./components/Signup/Signup.jsx";
import SignUpSuccessMessage from "./components/Signup/SignUpSuccessMessage.jsx";
import Courses from "./components/Courses/Courses.jsx";
import StudentsData from "./components/Admin/StudentsData/StudentsData.jsx";
import CreateCourses from "./components/Admin/CreateCourses/CreateCourses.jsx";
import MyCourses from "./components/Admin/MyCourses/MyCourses.jsx";
import PurchasedCourses from "./components/User/PurchasedCourses/PurchasedCourses.jsx";
import PurchaseCourse from "./components/User/PurchaseCourse/PurchaseCourse.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminNavbar from "./components/Navbar/AdminNavbar.jsx";
import UserNavbar from "./components/Navbar/UserNavbar.jsx";
import { useEffect, useMemo, useState } from "react";
import UserMyProfile from "./components/User/UserMyProfile/UserMyProfile.jsx";
import AdminMyProfile from "./components/Admin/AdminMyProfile/AdminMyProfile.jsx";
import { jwtDecode } from "jwt-decode";
import EditCourse from "./components/Admin/EditCourse/EditCourse.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const decode_token = jwtDecode(token);
      setIsAdmin(decode_token.role === "admin");
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    const decoded_token = jwtDecode(token);
    setIsAdmin(decoded_token.role === "admin");

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  function signupSuccess() {
    setIsSignupSuccess(true);
    setTimeout(() => {
      setIsSignupSuccess(false);
    }, 500);
  }

  const navbar=useMemo(()=>{
    return isLoggedIn ? (
      isAdmin ? (
        <AdminNavbar />
      ) : (
        <UserNavbar setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
      )
    ) : (
      <Navbar />
    )
  },[isLoggedIn,isAdmin])
  return (
    <div>
      {navbar}
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/signin" element={<Signin handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup success={signupSuccess} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admin/createCourses" element={<CreateCourses />} />
        <Route path="admin/myCourses" element={<MyCourses />} />
        <Route path="admin/handleStudents" element={<StudentsData />} />
        <Route path="user/myLearnings" element={<PurchasedCourses />} />
        {/* <Route path="user/courses" element={<PurchaseCourse />} /> */}
        <Route path="user/myProfile" element={<UserMyProfile />} />
        <Route path="admin/myProfile" element={<AdminMyProfile />} />
        <Route path="admin/editCourse/:courseId" element={<EditCourse />}
        />
      </Routes>
      <Footer />

      {success && <SignInSuccessMessage />}

      {isSignupSuccess && <SignUpSuccessMessage />}
    </div>
  );
}

export default App;
