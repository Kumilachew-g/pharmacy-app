import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import ForgotPassword from "./routes/Forgot";
import Signup from "./routes/signup";
import Dashboard from "./routes/Dashboard";
import Homepage from "./routes/LandingPage";

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
