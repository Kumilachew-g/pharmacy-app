import React from "react";
import "../index.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <SideBar />
      {/* main content container */}
      <div></div>
    </div>
  );
};

export default Dashboard;
