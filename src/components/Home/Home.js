import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import HomeService from "../HomeService/HomeService";
import Teachers from "../Teachers/Teachers";

const Home = () => {
  return (
    <div>
      <div className="m-5">
        <Banner></Banner>
      </div>
      <About></About>
      <HomeService></HomeService>
      <Events></Events>
      <Teachers></Teachers>
    </div>
  );
};

export default Home;
