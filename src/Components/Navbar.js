import React from "react";
import logo from "../Media/Images/Kinoverse Logo.svg";

const Navbar = () => {
  return (
    <nav className="nav-sec d-flex ">
      <div className="logo-img my-auto">
        <img src={logo} alt="" className=" " />
      </div>
      <div className="nav-lists ms-auto d-flex">
        <a href="">Support</a>
        <a href="/login">Login</a>
        <div className="btn-1 ">
          <a href="">Sign up free</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
