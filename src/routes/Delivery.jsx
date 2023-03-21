import React from "react";
import "../index.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Delivery = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <SideBar place="5" />
      {/* main content container */}
      <div></div>
    </div>
  );
};

export default Delivery;
