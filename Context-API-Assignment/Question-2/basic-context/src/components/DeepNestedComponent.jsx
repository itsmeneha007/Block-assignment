import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function DeepNestedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "#f4f4f4" : "#555",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "5px"
      }}
    >
      <h3>Deep Nested Component</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default DeepNestedComponent;
