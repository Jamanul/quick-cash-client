import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
  const userFromLS= localStorage.getItem('user')
  const userLS = (JSON.parse(userFromLS))
  const {user,setUser}=useContext(AuthContext)
  console.log(userLS?.email)
  const handleLogout =()=>{
    localStorage.removeItem("user")
    setUser(null)
  }
  useEffect(()=>{
    
  },[user])
    return (
        <div className="navbar bg-primary rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl text-white">Quick Cash</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        
          </ul>
        </div>
        <div className="navbar-end">
         {
          userLS || user ? <button onClick={handleLogout} className="btn bg-secondary font-semibold text-primary">Log out</button> : <Link to={'/login'} className="btn bg-secondary font-semibold text-primary">Login</Link>
         }
        </div>
      </div>
    );
};

export default Navbar;