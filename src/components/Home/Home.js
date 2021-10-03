import React from "react";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Teachers from "../Teachers/Teachers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1>This is Home</h1>
      <Events></Events>
      <Teachers></Teachers>
    </div>
  );
};

export default Home;
