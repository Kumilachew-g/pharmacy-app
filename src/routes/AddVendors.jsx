import React, { useState } from "react";
import "../index.css";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

const AddVendor = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="h-9/10 ">
        <Sidebar />
        {/* main content container */}
      </div>
    </div>
  );
};

export default AddVendor;
