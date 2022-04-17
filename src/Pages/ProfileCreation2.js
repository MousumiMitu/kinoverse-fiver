import React from "react";
import logo from "../Media/Images/Kinoverse Logo.svg";
import login from "../Media/Images/loginImg.svg";

const ProfileCreation2 = () => {
  return (
    <div>
      <nav className="nav-sec d-flex ">
        <div className="logo-img my-auto">
          <img src={logo} alt="" className=" " />
        </div>
      </nav>

      <div className="custom-container py-5">
        <div className="row">
          <div className="col-md-6 form-sec ">
            <h2>Create your profile</h2>
            <form action="" className="pt-4 form-box">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                name=""
                id="phone"
                placeholder=" xxx-xxxx-xxx "
              />

              <label htmlFor="info">CC Info</label>
              <input
                type="text"
                name=""
                id="info"
                placeholder="Enter your username here"
              />

              <input type="button" value="Submit" className="mt-4 submit-btn" />
            </form>
          </div>
          <div className="col-md-6">
            <img src={login} alt="" className=" img-fluid" />
            <div className="py-3 text-center login-text">
              <h4>Collaborate On The Go!</h4>
              <p>Chat, share files, and complete projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation2;
