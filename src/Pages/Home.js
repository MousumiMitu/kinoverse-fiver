import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import landingImg from "../Media/Images/landingImage1.svg";
import email from "../Media/Images/emailalt.svg";
import google from "../Media/Images/google-logo.svg";
import tab1 from "../Media/Images/tabImg1.svg";
import tab2 from "../Media/Images/tabImg2.svg";
import tab3 from "../Media/Images/tabImg3.svg";
import tab41 from "../Media/Images/tabImg4.3.svg";
import tab42 from "../Media/Images/tabImg4.1.svg";
import tab43 from "../Media/Images/tabImg4.2.svg";
import tab44 from "../Media/Images/tabImg4.4.svg";

const Home = () => {
  const [tab, setTab] = useState(["empolyee"]);
  const handleTabClick = (item) => {
    setTab(item);
  };
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="custom-container ">
        <div className="row p-0">
          <div className="col-md-4 py-5  hero-text">
            <h2>
              Quickly, simply, and easy for you to manage projects and build
              your own team.
            </h2>
            <p className="py-3">
              Kinoverse Business has everything you need to bring your ideas to
              life and change the way you produce films with your team. Puts the
              power of film project management in your hands.
            </p>
            <div>
              <div className="theme-btn red-bg mb-3">
                <a href="" className="d-flex my-auto">
                  <img
                    src={email}
                    alt=""
                    className="email-logo img-fluid my-auto"
                  />
                  <span className="my-auto ps-3">Sign Up Free with Email</span>
                </a>
              </div>
              <div className="theme-btn">
                <a href="" className="d-flex my-auto">
                  <img
                    src={google}
                    alt=""
                    className="google-logo img-fluid my-auto"
                  />
                  <span className="my-auto ps-3">Sign Up Free with Google</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 p-0 ">
            <img src={landingImg} alt="" className="img-fluid " />
          </div>
        </div>
      </div>
      <div className="text-center py-5 platform-text">
        <h2>Your projects run through one platform</h2>
        <p className="w-50 mx-auto py-3">
          Creative flow, manage film employees, summarize expenses quickly with
          user friendly interface. Generate your project ideas with several
          available plugin tools to support maximum quality of work, then save
          them there. Kinoverse Business is ready to support the management of
          your activities on the Kinoverse App.
        </p>
        <div className="theme-btn2 red-bg mb-3 mx-auto">
          <a href="" className="d-flex my-auto ">
            Find it below
          </a>
        </div>
      </div>

      {/* tab area */}
      <div className="tab-sec py-3">
        <div className="tab-area text-center">
          <span
            onClick={() => handleTabClick("empolyee")}
            className={tab === "empolyee" ? "active-color" : ""}
          >
            Employees
            <small className={tab === "empolyee" ? "span-active" : ""}></small>
          </span>
          <span
            onClick={() => handleTabClick("Creative")}
            className={tab === "Creative" ? "active-color" : ""}
          >
            Creative Flow{" "}
            <small className={tab === "Creative" ? "span-active" : ""}></small>
          </span>
          <span
            onClick={() => handleTabClick("Expenses")}
            className={tab === "Expenses" ? "active-color" : ""}
          >
            Expenses{" "}
            <small className={tab === "Expenses" ? "span-active" : ""}></small>
          </span>
          <span
            onClick={() => handleTabClick("Plugins")}
            className={tab === "Plugins" ? "active-color" : ""}
          >
            Plugins{" "}
            <small className={tab === "Plugins" ? "span-active" : ""}></small>
          </span>
        </div>

        {tab === "empolyee" ? (
          <div className="row custom-container">
            <div className="col-md-4 pt-5  tab-text ">
              <p className="mt-4 pt-5">
                Will let you categorize them based on jobs you have opened, or
                freelancer skills. You can export them anytime from the database
                of signed up employees or manually enter them.
              </p>
            </div>
            <div className="col-md-8 p-0  ">
              <img src={tab1} alt="" className="img-fluid " />
            </div>
          </div>
        ) : tab === "Creative" ? (
          <div className="row custom-container">
            <div className="col-md-4 pt-5  tab-text ">
              <p className="mt-4 pt-5">
                Allow you to create folders for each project and store whatever
                plugin you’ve saved in them to categorize each project.
              </p>
            </div>
            <div className="col-md-8 p-0  ">
              <img src={tab2} alt="" className="img-fluid " />
            </div>
          </div>
        ) : tab === "Expenses" ? (
          <div className="row custom-container">
            <div className="col-md-4 pt-5  tab-text ">
              <p className="mt-4 pt-5">
                This will let you track your expenses based on each employee and
                part of the creative flow. It will be a simple add and subtract
                function that will keep a record of everything after you post
                it, you can categorize it by job, or by freelancer. It will let
                you pull data from the creative flow and employees to categorize
                into sections to add and subtract for.
              </p>
            </div>
            <div className="col-md-8 p-0  ">
              <img src={tab3} alt="" className="img-fluid " />
            </div>
          </div>
        ) : (
          <div className="row custom-container">
            <div className="col-md-4 pt-5  tab-text ">
              <p className="mt-4 pt-5">
                This will let you track your expenses based on each employee and
                part of the creative flow. It will be a simple add and subtract
                function that will keep a record of everything after you post
                it, you can categorize it by job, or by freelancer. It will let
                you pull data from the creative flow and employees to categorize
                into sections to add and subtract for.
              </p>
            </div>
            <div className="col-md-8 p-0 position-relative ">
              <img src={tab41} alt="" className="img-fluid w-100 tab41-img" />
              <span className="tab44-img">
                <img src={tab43} alt="" className="img-fluid" />
              </span>
              <span className="tab44-img2">
                <img src={tab44} alt="" className="img-fluid" />
              </span>
              <span className="tab44-img3">
                <img src={tab42} alt="" className="img-fluid" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
