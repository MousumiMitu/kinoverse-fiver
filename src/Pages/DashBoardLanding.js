import React from "react";
import SideNav from "../Components/SideNav";

const dashBoardLanding = () => {
  return (
    <div className="d-flex py-4">
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="content-sec ">
        <div className="row">
          <div className="col-md-4 pt-3">
            <img src="kinoverse_logo_white.svg" alt="" className="img-fluid" />
            <h2 className="py-3">DashBoard</h2>
          </div>
          <div className="col-md-4 position-relative search-input">
            <input type="text" className="" placeholder="Search" />
            <img src="search.svg" alt="" className="img-fluid " />
          </div>
          <div className="col-md-4 row my-auto">
            <div className="col-5 d-flex justify-content-around">
              <div>
                <img src="openMail.svg" alt="" />
              </div>
              <div>
                <img src="bell.svg" alt="" />
              </div>
            </div>
            <div className="col-7 d-flex user-icon justify-content-end">
              <div className="text-end">
                <h5>A. Darmian</h5>
                <p>Client</p>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-9 border">
            <div className="row g-4 py-3">
              <div className="col-md-3 ">
                <div className="icon-items d-flex justify-content-around">
                  <div className="my-auto icon-items-img">
                    <img src="storyboard1.svg" alt="" className="my-auto" />
                  </div>
                  <div>
                    <p>11</p>
                    <span>Storyboard</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="icon-items d-flex justify-content-around">
                  <div className="my-auto icon-items-img">
                    <img src="storyboard1.svg" alt="" className="my-auto" />
                  </div>
                  <div>
                    <p>11</p>
                    <span>Storyboard</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="icon-items d-flex justify-content-around">
                  <div className="my-auto icon-items-img">
                    <img src="storyboard1.svg" alt="" className="my-auto" />
                  </div>
                  <div>
                    <p>11</p>
                    <span>Storyboard</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="icon-items d-flex justify-content-around">
                  <div className="my-auto icon-items-img">
                    <img src="storyboard1.svg" alt="" className="my-auto" />
                  </div>
                  <div>
                    <p>11</p>
                    <span>Storyboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 border"></div>
        </div>
      </div>
    </div>
  );
};

export default dashBoardLanding;
