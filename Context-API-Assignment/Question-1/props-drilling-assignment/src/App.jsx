import { useState } from "react";
import TopMain from "./components/TopMain";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TopMain name={name} />
    </div>
  );
}

export default App;
