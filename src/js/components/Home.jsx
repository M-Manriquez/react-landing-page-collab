import React from "react";
import Navbar from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <Navbar
        brandlink="https://google.com"
        brandname="google"
        navlink1="https:google.com"
      />
    </div>
  );
};

export default Home;
