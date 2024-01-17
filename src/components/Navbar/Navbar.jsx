import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    navigate("/signin");
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  function handleIconClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="navbar bg-blue-900">
      <div className="flex-1">
        <a
          onClick={handleIconClick}
          className="btn btn-ghost text-xl text-white"
        >
          FlowByte
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="group btn btn-ghost btn-circle"
          >
            <div className="indicator text-white border-2 border-white rounded-full p-1 group-hover:text-blue-900 group-hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item text-green-800 group-hover:text-white group-hover:bg-blue-900 ">
                8
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleSignin}
            className="bg-white text-blue-900 mx-3 h-fit px-4 py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white"
          >
            Signin
          </button>
          <button
            onClick={handleSignup}
            className="bg-white text-blue-900 mx-1 h-fit px-4 py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
