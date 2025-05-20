import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
    const {user,logoutUser}=use(AuthContext)
   
    const handleLogout=()=>{
        logoutUser()
        .then(result=>{
            console.log(result)
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
    <ul className="menu menu-horizontal px-1">
      <NavLink to='/'><li>Home</li></NavLink>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>

      <NavLink to='/createGroup'><li>Create Group</li></NavLink>
      <li><a>My Groups</a></li>
      <li><a>All Groups</a></li>

    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? (
            <>
             <span>{user.email}</span>
             <Link onClick={handleLogout} className='btn'>LogOut</Link>
            </>
        ):
        (
            <Link className='btn' to='/login'>Login</Link>
           
        )
    }
    
  </div>
</div>
    );
};

export default Header;