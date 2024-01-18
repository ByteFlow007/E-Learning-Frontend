import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    navigate(`/`);
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
            placeholder="eg. Abc@2023"
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
            placeholder="Password"
            className="input input-bordered w-full max-w-xs text-green-800"
          />
          <button
            onClick={handleSignin}
            className="mt-7 w-full bg-white text-blue-900 h-fit px-4 py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white "
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
