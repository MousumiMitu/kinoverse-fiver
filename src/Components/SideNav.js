import React from "react";
import sidelogo from "../Media/Images/side-logo.svg";
import sideIcon1 from "../Media/Images/sideicon1.svg";
import sideIcon2 from "../Media/Images/sideicon2.svg";
import sideIcon3 from "../Media/Images/sideicon3.svg";
import sideIcon4 from "../Media/Images/sideicon4.svg";
import sideIcon5 from "../Media/Images/sideicon5.svg";

const SideNav = () => {
  return (
    <div className="py-4">
      <div className="text-center pt-3">
        <img src={sidelogo} alt="" />
      </div>

      <div className="side-nav-items">
        <div className="d-flex nav-list">
          <div>
            <img src={sideIcon1} alt="" />
          </div>
          <div className="ps-4">
            <a href="">Dashboard</a>
          </div>
        </div>
        <div className="d-flex nav-list">
          <div>
            <img src={sideIcon2} alt="" />
          </div>
          <div className="ps-4">
            <a href="">Employess</a>
          </div>
        </div>

        <div className="d-flex nav-list">
          <div>
            <img src={sideIcon3} alt="" />
          </div>
          <div className="ps-4">
            <a href="">Creative Flow</a>
          </div>
        </div>

        <div className="d-flex nav-list">
          <div>
            <img src={sideIcon4} alt="" />
          </div>
          <div className="ps-4">
            <a href="">Expenses</a>
          </div>
        </div>

        <div className="d-flex nav-list pt-5">
          <div>
            <img src={sideIcon5} alt="" className="w-100 pe-1" />
          </div>
          <div className="ps-4">
            <a href="">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
