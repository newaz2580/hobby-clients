import { useContext, useState } from "react";
import {
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import { BsBarChartLine } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { MdGroups } from "react-icons/md"; // or any other you prefer

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

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
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold ">
            <Link to="/">
              <img
                className="rounded-full h-16 w-16"
                src="https://i.ibb.co/ksmN36sk/Whats-App-Image-2025-06-26-at-9-48-51-PM.jpg"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Logo */}
          <div className="w-full hidden md:flex  p-4 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
            <Link to="/">
              <img
                className="hidden md:block h-16 w-16 rounded-full"
                src="https://i.ibb.co/ksmN36sk/Whats-App-Image-2025-06-26-at-9-48-51-PM.jpg"
                alt="logo"
                width="100"
                height="100"
              />
              <h2>Hobby Hub</h2>
            </Link>
          </div>

          {/* Nav Items */}
          <nav>
            <ul className="list-none space-y-2 mt-20 md:mt-6">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                      : "text-black hover:bg-blue-100 px-4 py-2 rounded flex items-center gap-2"
                  }
                >
                  <AiOutlineHome className="text-lg" /> Home
                </NavLink>
              </li>

              <NavLink
                to="/dashBoard/allGroup"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                    : "text-black hover:bg-blue-100 px-4 py-2 rounded flex items-center gap-2"
                }
              >
                <MdGroups className="text-lg" /> All Hobby
              </NavLink>

              <li>
                <NavLink
                  to="/dashBoard/createGroup"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                      : "text-black hover:bg-blue-100 px-4 py-2 rounded flex items-center gap-2"
                  }
                >
                  <FcPlus className="text-lg" /> Add Hobby
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashBoard/group"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                      : "text-black hover:bg-blue-100 px-4 py-2 rounded flex items-center gap-2"
                  }
                >
                  <AiOutlineUsergroupAdd className="text-lg" /> My Group
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashBoard"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                      : "text-black hover:bg-blue-100 px-4 py-2 rounded flex items-center gap-2"
                  }
                >
                  <BsBarChartLine className="text-lg" /> Statistic
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Section */}
        <div className="px-4">
          <hr className="my-4" />
          {user && (
            <button
              onClick={handleSignOut}
              className="flex items-center w-full text-gray-600 hover:text-white hover:bg-red-500 px-4 py-2 rounded transition-colors duration-200"
            >
              <GrLogout className="mr-2 text-lg" />
              Sign Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
