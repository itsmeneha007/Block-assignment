import React, { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <h1> Welcome to Home</h1>;
      case "about":
        return <h1>About Us</h1>;
      case "contact":
        return <h1>Contact Us</h1>;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#282c34",
    color: "white",
    fontSize: "18px",
  };

  const linkStyle = (page) => ({
    cursor: "pointer",
    fontWeight: activePage === page ? "bold" : "normal",
    borderBottom: activePage === page ? "2px solid yellow" : "none",
  });

  const contentStyle = {
    textAlign: "center",
    padding: "50px",
    backgroundColor:
      activePage === "home"
        ? "#f0f8ff"
        : activePage === "about"
        ? "#ffe4e1"
        : "#e6ffe6",
    minHeight: "80vh",
  };

  return (
    <div>
      <nav style={navStyle}>
        <span style={linkStyle("home")} onClick={() => setActivePage("home")}>
          Home
        </span>
        <span style={linkStyle("about")} onClick={() => setActivePage("about")}>
          About
        </span>
        <span
          style={linkStyle("contact")}
          onClick={() => setActivePage("contact")}
        >
          Contact
        </span>
      </nav>
      <div style={contentStyle}>{renderContent()}</div>
    </div>
  );
}

export default App;
