import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Typewriters from "../../Pages/Typewriters";
import ReactSwitch from "react-switch";

const Header = () => {
  const { user, logoutUser, toggleTheme, theme } = useContext(AuthContext);
  const navigate = useNavigate();

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
            className=" btn-ghost lg:hidden"
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
            <li data-tip="Home section">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
              >
                <span className="text-xl font-semibold">Home</span>
              </NavLink>
            </li>
            <li data-tip="Created All hobby Group here">
              <NavLink
                to="/allGroup"
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
              >
                <span className="text-xl font-semibold">All Groups</span>
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/dashBoard"
                    className={({ isActive }) =>
                      isActive ? "font-bold underline" : ""
                    }
                  >
                    <span className="text-xl font-semibold">Dashboard</span>
                  </NavLink>
                </li>
              </>
            )}
            <li data-tip="About">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
              >
                <span className="text-xl font-semibold">About</span>
              </NavLink>
            </li>

            <li data-tip="Faq">
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
              >
                <span className="text-xl font-semibold">Faq</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            className="h-12 w-12 rounded-full"
            src={`https://i.ibb.co/ksmN36sk/Whats-App-Image-2025-06-26-at-9-48-51-PM.jpg`}
            alt=""
          />
        </Link>
        <Link
          to="/"
          className="text-shadow-indigo-700 text-orange-500 font-extrabold text-2xl hidden md:flex"
        >
          HobbyHub
        </Link>

        <div className="px-4">
          <Typewriters />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li data-tip="Home section">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              <span className="text-xl font-semibold">Home</span>
            </NavLink>
          </li>
          <li data-tip="Created All hobby Group here">
            <NavLink
              to="/allGroup"
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              <span className="text-xl font-semibold">All Groups</span>
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/dashBoard"
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : ""
                  }
                >
                  <span className="text-xl font-semibold">Dashboard</span>
                </NavLink>
              </li>
            </>
          )}
          <li data-tip="About">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              <span className="text-xl font-semibold">About</span>
            </NavLink>
          </li>
          <li data-tip="Faq">
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              <span className="text-xl font-semibold">Faq</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3 ">
        {user && (
          <div className="relative group avatar hidden md:flex">
            <div className="w-[40px] rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2 cursor-pointer">
              <img src={user?.photoURL} alt={user?.displayName || "User"} />
            </div>
            <div className="absolute top-1 right-0 mr-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            className="btn btn-primary px-2 lg:px-4  text-xl lg:py-5 py-2 rounded-4xl"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary px-2 lg:px-4  text-xl lg:py-5 py-2 rounded-4xl"
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
