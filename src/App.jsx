import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Signin from "./components/Signin/Signin.jsx";
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
import { useEffect, useState } from "react";
import UserMyProfile from "./components/User/UserMyProfile/UserMyProfile.jsx";
import AdminMyProfile from "./components/Admin/AdminMyProfile/AdminMyProfile.jsx";
import { jwtDecode } from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const decode_token = jwtDecode(token);
      setIsAdmin(decode_token.role === "Admin");
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    const decoded_token = jwtDecode(token);
    setIsAdmin(decoded_token.role === "Admin");

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

  return (
    <>
    {isLoggedIn ? (
        isAdmin ? (
          <AdminNavbar />
        ) : (
          <UserNavbar setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
        )
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/signin" element={<Signin handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup success={signupSuccess} />} />

        <Route path="/admin/createCourses" element={<CreateCourses />} />
        <Route path="admin/myCourses" element={<MyCourses />} />
        <Route path="admin/handleStudents" element={<StudentsData />} />
        <Route path="user/myLearnings" element={<PurchasedCourses />} />
        <Route path="user/courses" element={<PurchaseCourse />} />
        <Route path="user/myProfile" element={<UserMyProfile />} />
        <Route path="admin/myProfile" element={<AdminMyProfile />} />
      </Routes>
      <Footer />

      {success && (
        <div
          role="alert"
          className="alert alert-success z-10 w-fit fixed right-0 bottom-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Signin Successful</span>
        </div>
      )}

      {isSignupSuccess && <SignUpSuccessMessage />}

    </>
  );
}

export default App;
