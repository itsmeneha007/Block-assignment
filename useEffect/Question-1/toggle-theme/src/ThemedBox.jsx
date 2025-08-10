import React from "react";

function ThemedBox({ theme, text }) {
  const boxStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow:
      theme === "light"
        ? "0 2px 5px rgba(0,0,0,0.2)"
        : "0 2px 5px rgba(255,255,255,0.2)",
    flex: "1",
    transition: "all 0.3s ease",
  };

  return <div style={boxStyle}>{text}</div>;
}

export default ThemedBox;
