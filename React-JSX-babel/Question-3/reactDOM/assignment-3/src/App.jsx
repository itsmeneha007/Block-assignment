import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("Hello World (React)")
  const [reactUpdates, setReactUpdates] = useState(0)

  const changeTitleReact = () => {
    setTitle("Updated Title (React) " + Math.floor(Math.random() * 100));
    setReactUpdates((prev) => prev + 1);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{title}</h1>
      <button onClick={changeTitleReact}>Change Title (React)</button>
      <p>DOM Updates: {reactUpdates}</p>
    </div>
  );
}

export default App;
