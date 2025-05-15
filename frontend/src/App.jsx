import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TodoPage from "./pages/TodoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} token={token} />
      <Routes>
        <Route path="/" element={token ? <Navigate to="/todos" /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/todos" element={token ? <TodoPage token={token} /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;