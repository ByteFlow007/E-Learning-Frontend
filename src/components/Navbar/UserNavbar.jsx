import { Link, useNavigate } from "react-router-dom";

function UserNavbar() {
  const navigate = useNavigate();

  function handleIconClick(e) {
    e.preventDefault();
    navigate("/");
  }

  function handleLogout() {}
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
          <div className=" dropdown-bottom absolute left-32">
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow "
            >
              <div className="card-body rounded-xl border-2 border-white bg-blue-900 text-white ">
                <span className="font-bold text-lg">8 Items</span>
                <span className="font-thin">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="bg-white text-blue-900 h-fit w-full py-2 rounded-lg border-2 border-white hover:bg-blue-900 hover:text-white">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mx-3">
          <Link to="/user/myLearnings" className="mr-3">MyLearnings</Link>
          <Link to="/">Courses</Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between" to="/user/myProfile">
                Profile
              </Link>
            </li>

            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserNavbar;
