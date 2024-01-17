import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CreateCourses from "./components/Admin/CreateCourses.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const isLoggedIn=()=>{
    
  }
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/createCourses" element={<CreateCourses />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
