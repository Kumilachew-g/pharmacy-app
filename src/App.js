import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import ForgotPassword from './routes/Forgot';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='forgot' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
