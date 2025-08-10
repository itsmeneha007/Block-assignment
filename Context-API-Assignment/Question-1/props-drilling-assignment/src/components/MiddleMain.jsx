import BottomMain from "./BottomMain";

function MiddleMain({ name }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", marginTop: "10px" }}>
      <h3>MiddleMain Component</h3>
      <BottomMain name={name} />
    </div>
  );
}

export default MiddleMain;
