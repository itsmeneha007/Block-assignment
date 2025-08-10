import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import NestedComponent from "./components/NestedComponent";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px"
        }}
      >
        <h1>Theme Context API Example</h1>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>

        <NestedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
