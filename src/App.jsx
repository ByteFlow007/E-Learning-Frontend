import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Courses from "./components/Courses/Courses.jsx";
import MyCourses from "./components/Admin/MyCourses/MyCourses.jsx"
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/mycourses" element={<MyCourses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
