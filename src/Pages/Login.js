import React from "react";
import logo from "../Media/Images/Kinoverse Logo.svg";
import login from "../Media/Images/loginImg.svg";

const Login = () => {
  return (
    <div>
      <nav className="nav-sec d-flex nav-bg2">
        <div className="logo-img my-auto">
          <img src={logo} alt="" className=" " />
        </div>
      </nav>

      <div className="custom-container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={login} alt="" className=" img-fluid" />
            <div className="py-3 text-center login-text">
              <h4>Collaborate On The Go!</h4>
              <p>Chat, share files, and complete projects.</p>
            </div>
          </div>
          <div className="col-md-6 form-sec ps-5">
            <h2>
              Hi, there! <br /> Welcome back.
            </h2>
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

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Please enter your password"
              />

              <input type="button" value="Login" className="mt-4 submit-btn" />
              <div className="text-center py-4 alt-text">
                <h5>
                  New to the Kinoverse? <a href="/sign-up">Sign Up </a>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
