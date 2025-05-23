import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Typewriters from "../../Pages/Typewriters";
import ReactSwitch from "react-switch";

const Header = () => {
  const { user, logoutUser, toggleTheme, theme } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li data-tip="Home section">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          <span className="text-xl font-semibold">Home</span>
        </NavLink>
      </li>
      <li data-tip="Created All hobby Group here">
        <NavLink
          to="/allGroup"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          <span className="text-xl font-semibold">All Groups</span>
        </NavLink>
      </li>
      <li data-tip="Create new hobby Group by User">
        <NavLink
          to="/createGroup"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          <span className="text-xl font-semibold">Create Group</span>
        </NavLink>
      </li>
      <li data-tip="Created Group by User">
        <NavLink
          to="/group"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          <span className="text-xl font-semibold">My Groups</span>
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Signout successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message || "Signout failed");
      });
  };

  return (
    <div className="navbar shadow-sm fixed top-0 left-0 right-0 z-30 md:px-8  text-black dark:text-white bg-white dark:bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className="text-shadow-indigo-700 font-extrabold text-2xl hidden md:flex"
        >
          HobbyHub
        </Link>

        <div className="px-4">
          <Typewriters />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{links}</ul>
      </div>
       
      <div className="navbar-end gap-3">
        {user && (
          <div className="relative group avatar">
            <div className="w-10 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2 cursor-pointer">
              <img src={user?.photoURL} alt={user?.displayName || "User"} />
            </div>
            <div className="absolute top-1 right-full mr-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="relative bg-pink-950 text-white text-xl px-4 py-2 rounded-4xl shadow-lg whitespace-nowrap">
                {user.displayName}
                <div className="absolute top-2 right-[-6px] w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
              </div>
            </div>
          </div>
        )}
       
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary lg:px-6 px-4 text-2xl lg:py-7 py-2 rounded-4xl"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary px-4 lg:px-10 text-2xl py-3 lg:py-7 rounded-4xl"
          >
            Login
          </Link>
        )}
         <ReactSwitch
          onChange={toggleTheme}
          checked={theme == "dark"}
        ></ReactSwitch>
      </div>
    </div>
  );
};

export default Header;
