import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import { toast } from "react-toastify";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Typewriters from "../../Pages/Typewriters";

const Header = () => {
  const { user, logoutUser, setMode, mode } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Signout successful");

        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
        toast.error("Signout failed");
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 right-0 left-0 z-30 px-9 bg-gradient-to-r from-blue-500 to-purple-600 p-2 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <p
              className="tooltip flex items-center"
              data-tip="Home section"
            >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>Home</li>
          </NavLink>
          </p>
          <p
              className="tooltip flex items-center"
              data-tip="Created All hobby Group here"
            >
          <NavLink
            to="/allGroup"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>All Groups</li>
          </NavLink>
          </p>
          <p
              className="tooltip flex items-center"
              data-tip="Create new hobby Group by User"
            >
          <NavLink
            to="/createGroup"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>Create Group</li>
          </NavLink>
          
       </p>
          <p
              className="tooltip flex items-center"
              data-tip="Created Group by User"
            >
              <NavLink
                to="/group"
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
              >
                <li>My Groups</li>
              </NavLink>
            </p>
          </ul>
        </div>
        <Link
          to="/"
          className=" text-shadow-indigo-700 font-extrabold text-2xl hidden md:flex"
        >
          HobbyHub
        </Link>
        
        <div className="pl-2" onClick={() => setMode(!mode)}>
          {mode ? (
            <MdDarkMode size={30} className="text-black" />
          ) : (
            <CiLight size={30} />
          )}
        </div>
        <div className="px-4"><Typewriters></Typewriters></div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <p
              className="tooltip flex items-center"
              data-tip="Home section"
            >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>Home</li>
          </NavLink>
          </p>
          <p
              className="tooltip flex items-center"
              data-tip="Created All hobby Group here"
            >
          <NavLink
            to="/allGroup"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>All Groups</li>
          </NavLink>
          </p>
          <p
              className="tooltip flex items-center"
              data-tip="Create new hobby Group by User"
            >
          <NavLink
            to="/createGroup"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>Create Group</li>
          </NavLink>
          
       </p>
          <p
              className="tooltip flex items-center"
              data-tip="Created Group by User"
            >
              <NavLink
                to="/group"
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
              >
                <li>My Groups</li>
              </NavLink>
            </p>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user && (
          <>
            <div className="relative group avatar">
              <div className="w-10 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2 cursor-pointer">
                <img src={user.photoURL} alt={user.displayName || "user"} />
              </div>
              <div className="absolute top-1 right-full mr-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative bg-pink-950 text-white text-xl px-4 py-2 rounded-4xl shadow-lg whitespace-nowrap">
                  {user.displayName}
                  <div className="absolute top-2 right-[-6px] w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                </div>
              </div>
            </div>
          </>
        )}

        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="btn btn-primary lg:px-6 px-4 text-2xl lg:py-7 py-2 rounded-4xl"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-primary px-4 lg:px-10 text-2xl py-3 lg:py-7 rounded-4xl"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
