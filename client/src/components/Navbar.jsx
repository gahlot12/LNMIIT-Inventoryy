import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {

  const navigate = useNavigate();

 
  const [menuOpen, setMenuOpen] = useState(false);
  let path;
  const handleLogout = () => {
    if (localStorage.getItem("token") !== null) {
      localStorage.removeItem("token");
    } else if (localStorage.getItem("admintoken") !== null) {
      localStorage.removeItem("admintoken");
    }
    navigate("/home");
    // setIsLoggedIn(false);
  };
  if(localStorage.getItem("token") !== null){
    path="/userdashboard"
  }else if(localStorage.getItem("admintoken") !== null){
    path="/admindashboard"
  }else{
    path="/"
  }

  return (
    <nav
      className="min-h-[70px] min-w-screen flex justify-between items-center bg-red-800 sticky top-0"
      style={{ fontFamily: "Roboto, sans-serif", zIndex: "100" }}
    >
      
      <Link to="https://lnmiit.ac.in/" className="text-white text-3xl font-extrabold">
        <img src={logo} alt="LOGO" className="h-14 w-60" style={{ backgroundColor: 'white', height: '70px' ,width: '200px' }} />
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={`flex items-center text-white ${menuOpen ? "open" : "hidden"}`}
        style={{ fontSize: 18, fontWeight: 400 }}
      >
        <li className="p-3 rounded-[12px]">
          <NavLink to={`${path}`} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="p-3 rounded-[12px]">
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
        </li>
        <li className="p-3 rounded-[6px]">
          <NavLink to="/Services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </li>
        <li className="p-3 rounded-[6px]">
          <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>
            Contacts
          </NavLink>
        </li>

        {(localStorage.getItem("token") !== null || localStorage.getItem("admintoken") !== null) && (
          <li className="px-3 ">
            <button 
              className=" bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded "
              onClick={handleLogout}>
                Logout
              </button>
          </li>
        )}
      </ul>

      <style>
        {`
          .active {
            color: white;
            font-size: 1.1rem;
            font-weight: bold;
          }

          li:hover {
            font-weight: bold;
          }

          nav .menu {
            display: none;
            position: absolute;
            top: 0.75rem;
            right: 0.5rem;
            flex-direction: column;
            justify-content: space-between;
            width: 2.25rem;
            height: 2rem;
          }

          nav .menu span {
            height: 0.4rem;
            width: 100%;
            background-color: #fff;
            border-radius: 0.2rem;
          }

          .hidden,
          .open {
            display: flex;
          }

          @media (max-width: 650px) {
            nav .menu {
              display: flex;
  
            }

            nav {
              flex-direction: column;
              align-items: flex-start;
              // border:2px solid red;
              padding-bottom:15px;
            }

            .hidden {
              display: none;
            }

            .open {
              display: flex;
              flex-direction: column;
            }

            nav ul li {
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
