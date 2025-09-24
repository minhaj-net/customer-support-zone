import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1280px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">{/* For responsive three line ul */}</div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex"></div>
        <div className=" mr-12">
          <ul className="flex  text-[13px] gap-4">
            <li>Home </li>
            <li>FAQ </li>
            <li>Changelog </li>
            <li>Blog </li>
            <li>Download </li>
            <li>Contact </li>
          </ul>
        </div>
        <a className="btn !bg-gradient-to-r from-[#632EE3] to-[#9F62F2] !text-white">
          {" "}
          + New Ticket
        </a>
      </div>
    </div>
  );
};

export default Navbar;
