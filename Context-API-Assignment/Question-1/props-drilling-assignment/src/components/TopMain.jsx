import MiddleMain from "./MiddleMain";

function TopMain({ name }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h2>TopMain Component</h2>
      <MiddleMain name={name} />
    </div>
  );
}

export default TopMain;
