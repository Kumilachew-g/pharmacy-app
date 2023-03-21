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
import Faqs from "./routes/Faqs";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
