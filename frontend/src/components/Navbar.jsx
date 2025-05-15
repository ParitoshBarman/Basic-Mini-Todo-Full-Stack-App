
// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ token, onLogout }) => {
  return (
    <nav style={{ padding: "1rem", background: "#282c34", color: "white", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>TodoApp</Link>
      </div>
      <div>
        {token ? (
          <>
            <Link to="/todos" style={{ marginRight: 10, color: "white" }}>Todos</Link>
            <button onClick={onLogout} style={{ background: "transparent", color: "white", border: "1px solid white" }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: 10, color: "white" }}>Login</Link>
            <Link to="/signup" style={{ color: "white" }}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;