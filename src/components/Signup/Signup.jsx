import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//https://elearningbackend-ztzn.onrender.com/

function Signup() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function handleSignup() {
    let response;
    if (!isAdmin) {
      response = await axios.post(
        "https://elearningbackend-ztzn.onrender.com/user/signup",
        {
          email,
          username,
          password,
        }
      );
    } else {
      response = await axios.post(
        "https://elearningbackend-ztzn.onrender.com/admin/signup",
        {
          email,
          username,
          password,
        }
      );
    }

    if (response.data.success) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/signin");
      }, 2000);
    } else {
      setMessage(response.data.errMessage);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }

  function handleAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div className="bg-blue-100 h-screen flex flex-col items-center justify-center">
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
          <span>Signed Up Successfully.</span>
        </div>
      )}
      {error && (
        <div
          role="alert"
          className="alert alert-error z-10 w-fit fixed right-0 bottom-0"
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      )}
      <div className="card w-96 bg-blue-900 text-white shadow-xl flex items-center py-5 ">
        <div className="text-3xl font-bold underline">SignUp</div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Username</span>
          </div>
          <input
            type="text"
            placeholder="eg. abc123"
            className="input input-bordered w-full max-w-xs text-green-800"
            onChange={handleUsername}
          />
          <div className="label">
            <span className="label-text text-white">Email</span>
          </div>
          <input
            type="text"
            placeholder="eg. xyz@gmail.com"
            className="input input-bordered w-full max-w-xs text-green-800"
            onChange={handleEmail}
          />
          <div className="label">
            <span className="label-text text-white">Password</span>
          </div>
          <input
            type="text"
            placeholder="eg. Abc@2023"
            className="input input-bordered w-full max-w-xs text-green-800"
            onChange={handlePassword}
          />
          <div className="form-control">
            <label className="label cursor-pointer mt-3">
              <span className="label-text text-white ">
                Want to signup as Admin?
              </span>
              <input
                type="checkbox"
                className="toggle"
                onChange={handleAdmin}
                checked={isAdmin}
              />
            </label>
          </div>
          <button
            onClick={handleSignup}
            className="mt-4 w-full bg-white text-blue-900 h-fit px-4 py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white "
          >
            Signup
          </button>
        </label>
        <div className="mt-2">
          Already have an Account!{" "}
          <Link to="/signin" className="hover:text-blue-200  underline">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
