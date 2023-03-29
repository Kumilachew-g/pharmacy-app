import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/auth/Login";
import ForgotPassword from "./routes/auth/Forgot";
import Signup from "./routes/auth/SignUp";
import Dashboard from "./routes/Dashboard";
import Homepage from "./routes/LandingPage";
import Profile from "./routes/Profile";
import Billing from "./routes/Billing";
import Delivery from "./routes/Delivery";
import Product from "./routes/Products";
import Vendor from "./routes/Vendors";
import Notification from "./routes/Notifications";
import Faqs from "./routes/Faqs";
import AddVendor from "./routes/AddVendors";
import AddProduct from "./routes/AddProduct";
import AddBill from "./routes/AddBill";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/vendors" element={<Vendor />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route exact path="/addVendor" element={<AddVendor />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/addBill" element={<AddBill />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
