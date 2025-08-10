import BottomMainLeft from "./BottomMainLeft";
import BottomMainRight from "./BottomMainRight";

function BottomMain({ name }) {
  return (
    <div style={{ border: "1px solid green", padding: "10px", marginTop: "10px" }}>
      <h4>BottomMain Component</h4>
      <div style={{ display: "flex", gap: "20px" }}>
        <BottomMainLeft />
        <BottomMainRight name={name} />
      </div>
    </div>
  );
}

export default BottomMain;
