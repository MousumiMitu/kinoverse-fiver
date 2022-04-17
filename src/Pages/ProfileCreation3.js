import React from "react";
import logo from "../Media/Images/Kinoverse Logo.svg";
import login from "../Media/Images/loginImg.svg";
import profile from "../Media/Images/gg_profile.svg";

const ProfileCreation3 = () => {
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
            <div className="upload-sec text-center pt-3">
              <div className="upload-img mx-auto">
                <img src={profile} alt="" />
              </div>
              <div className="pt-3">
                <p>Upload your profile picture</p>
              </div>
            </div>
            <form action="" className="pt-4 form-box">
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

export default ProfileCreation3;
