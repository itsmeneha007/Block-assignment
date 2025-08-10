function BottomMainRight({ name }) {
  return (
    <div style={{ border: "1px solid red", padding: "10px", flex: 1 }}>
      <p>BottomMainRight Component</p>
      <strong>User's Name: {name || "No name entered yet"}</strong>
    </div>
  );
}

export default BottomMainRight;
