import React from "react";
import { FaAppStore, FaGithub, FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import Banner from "./Banner";
import { MdInstallDesktop } from "react-icons/md";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-1 relative
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-primary after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-1 relative
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-primary after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `
          }
        >
          <FaAppStore />
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-1 relative
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-primary after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `
          }
        >
          <MdInstallDesktop />
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost flex items-center text-xl ">
          <img src={logo} alt="Hero.IO Logo" className="w-8 h-8" />
          Hero.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/TanvirReza1"
          target="_blank"
          className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Contributor
        </a>
      </div>
    </div>
  );
};

export default NavBar;
