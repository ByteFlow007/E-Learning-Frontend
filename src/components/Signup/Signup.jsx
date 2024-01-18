import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    navigate(`/signin`);
  }

  function handleAdmin() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
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
          />
          <div className="label">
            <span className="label-text text-white">Email</span>
          </div>
          <input
            type="text"
            placeholder="eg. xyz@gmail.com"
            className="input input-bordered w-full max-w-xs text-green-800"
          />
          <div className="label">
            <span className="label-text text-white">Password</span>
          </div>
          <input
            type="text"
            placeholder="eg. Abc@2023"
            className="input input-bordered w-full max-w-xs text-green-800"
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
            onClick={handleSignin}
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
