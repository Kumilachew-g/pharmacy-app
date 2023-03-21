import React from "react";
import "../index.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Billing = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <SideBar place="3" />
      {/* main content container */}
      <div></div>
    </div>
  );
};

export default Billing;
