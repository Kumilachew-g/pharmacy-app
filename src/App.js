import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import ForgotPassword from "./routes/Forgot";
import Signup from "./routes/SignUp";
import Dashboard from "./routes/Dashboard";
import Homepage from "./routes/LandingPage";
import Profile from "./routes/Profile";
import Billing from "./routes/Billing";
import Delivery from "./routes/Delivery";
import Product from "./routes/Products";
import Vendor from "./routes/Vendors";
import Notification from "./routes/Notifications";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="billing" element={<Billing />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="product" element={<Product />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
