import React from "react";
import logo from "../Media/Images/Kinoverse Logo.svg";
import login from "../Media/Images/loginImg.svg";

const ProfileCreation = () => {
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
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="example@mail.com "
              />

              <label htmlFor="Username">Username</label>
              <input
                type="email"
                name=""
                id="Username"
                placeholder="Enter your username here"
              />

              <div className="password-input position-relative">
                <label htmlFor="password">Password</label>
                <span>Forgot password?</span>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Please enter your password"
                />
              </div>

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

export default ProfileCreation;
