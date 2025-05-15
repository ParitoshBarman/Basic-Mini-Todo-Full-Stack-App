import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", background: "#f1f1f1", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
