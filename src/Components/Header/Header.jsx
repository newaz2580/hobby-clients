import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import { toast } from "react-toastify";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const { user, logoutUser,setMode,mode } = React.useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Signout successful");

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allGroup">All Groups</NavLink>
            </li>
            <li>
              <NavLink to="/createGroup">Create Group</NavLink>
            </li>
            <li>
              <NavLink to="/group">My Groups</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn text-green-700 font-extrabold text-2xl">
          HobbyHub
        </Link>
        <div onClick={()=>setMode(!mode)}>
          {
            mode ? <MdDarkMode size={25} className="text-black" />:<CiLight size={25} />
          }
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/allGroup"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>All Groups</li>
          </NavLink>
          <NavLink
            to="/createGroup"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>Create Group</li>
          </NavLink>
          <NavLink
            to="/group"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            <li>My Groups</li>
          </NavLink>
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
