import React from "react";
import "../index.css";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import DeliveryMainCard from "../../components/delivery/MainCard";

const Delivery = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <SideBar place="5" />
      {/* main content container */}
      <div className="mt-auto w-4/5 p-10 bg-gray-50 ml-auto">
        <div className="flex flex-col">
          <DeliveryMainCard />
          <DeliveryMainCard />
          <DeliveryMainCard />
          <DeliveryMainCard />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
