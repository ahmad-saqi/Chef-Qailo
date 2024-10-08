import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Adjust the path as necessary
import ResetPassword from "./components/RestPassword"; // Adjust the path as necessary
import ForgotPassword from "./components/ForgotPassword"; // Adjust the path as necessary
import VerificationCode from "./components/VerificationCode"; 
import Dashboard from "./pages/Dashboard"; // Adjust the path as necessary
import UserList from "./pages/UserList"; // Adjust the path as necessary
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<VerificationCode />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
