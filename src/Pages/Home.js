import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="custom-container border py-5">
        <div className="row">
          <div className="col-md-4 p-0"></div>
          <div className="col-md-8 p-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
