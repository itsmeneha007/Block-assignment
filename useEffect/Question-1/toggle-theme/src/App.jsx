import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const appStyle = {
    textAlign: "center",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <div className="box-container">
        <ThemedBox theme={theme} text="Box 1 Content" />
        <ThemedBox theme={theme} text="Box 2 Content" />
        <ThemedBox theme={theme} text="Box 3 Content" />
      </div>
    </div>
  );
}

export default App;
