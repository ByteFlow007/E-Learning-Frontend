/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
function Signin({ handleLogin }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
 
  const [errMessage,setErrMessage]=useState('');
const navigate=useNavigate();

  const handleSignin = async () => {
  let response;
  
  if(!isAdmin){
    response = await axios.post(
      "https://elearningbackend-ztzn.onrender.com/user/signin",
      { usernameOrEmail, password }
    );
  }
    
  else{
    response = await axios.post(
      "https://elearningbackend-ztzn.onrender.com/admin/signin",
      { usernameOrEmail, password }
    );
  }

      if (usernameOrEmail.trim() === "" || password.trim() === "") {
        setError("Please enter both username and password.");
        
      }
      console.log(response);
      if (response.data.success) {
        const token = response.data.data;
        handleLogin(token);
        if(!isAdmin)
        navigate("/user/courses");
        else
        navigate("/admin/myCourses");
        
      } 
      else {
        setErrMessage(response.data.errMessage);
        setError(true);
        
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
     
    
  };

  function handleAdmin() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      
      <div className="card w-96 bg-blue-900 text-white shadow-xl flex items-center py-5 ">
        <div className="text-3xl font-bold underline">SignIn</div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Username</span>
          </div>
          <input
            type="text"
            placeholder="Username or Email"
            required="required"
            className="input input-bordered w-full max-w-xs text-green-800"
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />

          <div className="label">
            <span className="label-text text-white">Password</span>
          </div>
          <input
            type="text"
            placeholder="Password"
            required="required"
            className="input input-bordered w-full max-w-xs text-green-800"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-control ">
            <label className="label cursor-pointer mt-3 ">
              <span className="label-text text-white ">Are you a Admin?</span>
              <input
                type="checkbox"
                className={
                  isAdmin
                    ? "toggle bg-blue-900 hover:bg-blue-950"
                    : "toggle bg-blue-400 hover:bg-blue-500"
                }
                onChange={handleAdmin}
                checked={isAdmin}
              />
            </label>
          </div>
          <button
            onClick={handleSignin}
            className="mt-4 w-full bg-white text-blue-900 h-fit px-4 py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white "
          >
            Signin
          </button>
        </label>
        <div className="mt-2">
          Don't have account?
          <Link to="/signup" className="hover:text-blue-200  underline">
            Signup
          </Link>
           {error && (
        <div role="alert" className="alert alert-error z-10 w-fit fixed right-0 bottom-0">
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errMessage}</span>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
