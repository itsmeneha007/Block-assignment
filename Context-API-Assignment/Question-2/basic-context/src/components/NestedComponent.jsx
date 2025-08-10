import DeepNestedComponent from "./DeepNestedComponent";

function NestedComponent() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Nested Component</h2>
      <DeepNestedComponent />
    </div>
  );
}

export default NestedComponent;
