import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
    const {user,logoutUser}=use(AuthContext)
    const navigate=useNavigate()
    
    const handleSignOut=()=>{
        logoutUser()
        .then(result=>{
            console.log(result)
            navigate("/")
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">HobbyHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-5">
      <NavLink to='/'><li>Home</li></NavLink>
      <NavLink to='/allGroup'><li>All Groups</li></NavLink>
      <NavLink to='/createGroup'><li>Create Group</li></NavLink>
      <NavLink to='/group'><li>My Groups</li></NavLink>

    </ul>
  </div>
  <div className="navbar-end gap-3">
        {user && (
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
        )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary lg:px-8 px-4 text-2xl lg:py-7 py-3 rounded-4xl"
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
      </div>
</div>
    );
};

export default Header;