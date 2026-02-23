import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGraduationCap, FaBars } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md';

const Navbar = () => {
  const navOptions = (
    <>
      <li><NavLink to="/">Home</NavLink></li>

      {/* Academics Dropdown */}
      <li className="dropdown">
        <details>
          <summary className="flex items-center gap-1">Academics</summary>
          <ul className="p-2 bg-base-100 rounded-t-none z-[50] w-60 shadow-xl border border-base-200">
            <li><NavLink to="/teachers">Teacher's Profile</NavLink></li>
            <li><NavLink to="/fees">Fee Structure</NavLink></li>
            {/* <li><NavLink to="/routine-syllabus">Class Routine & Syllabus</NavLink></li> */}
            {/* <li><NavLink to="/calendar">Academic Calendar</NavLink></li> */}
            <li><NavLink to="/admissions">Admissions</NavLink></li>
          </ul>
        </details>
      </li>

      {/* Portals Dropdown */}
      {/* <li className="dropdown">
        <details>
          <summary className="flex items-center gap-1">Portals</summary>
          <ul className="p-2 bg-base-100 rounded-t-none z-[50] w-52 shadow-xl border border-base-200">
            <li><NavLink to="/results">Result Portal</NavLink></li>
            <li><NavLink to="/attendance">Online Attendance</NavLink></li>
          </ul>
        </details>
      </li> */}

      <li><NavLink to="/results">Result Portal</NavLink></li>
      <li><NavLink to="/gallery">Gallery</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-[100] px-4 md:px-10">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* FaBars icon for mobile menu */}
            <FaBars className="text-xl" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-64 font-medium border border-base-200 text-base-content">
            {navOptions}
          </ul>
        </div>
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl text-primary-content shadow-md group-hover:scale-110 transition-transform">
            {/* FaGraduationCap icon for logo */}
            <FaGraduationCap size={28} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-primary">NOVUS</span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-secondary">HORIZON</span>
          </div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-[15px]">
          {navOptions}
        </ul>
      </div>

      {/* Dashboard Call to Action */}
      <div className="navbar-end">
        <Link 
          to="/login" 
          className="btn btn-primary btn-sm md:btn-md px-6 text-white rounded-full hover:shadow-indigo-300 hover:shadow-lg transition-all flex items-center gap-2"
        >
          {/* MdDashboard*/}
          <MdDashboardCustomize size={20} />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;