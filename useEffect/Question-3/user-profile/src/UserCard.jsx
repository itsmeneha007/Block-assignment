import React from "react";

function UserCard({ name, email, city }) {
  const cardStyle = {
    background: "#fff",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "left",
  };

  const nameStyle = { fontSize: "1.2rem", fontWeight: "bold" };
  const emailStyle = { color: "#555" };
  const cityStyle = { fontStyle: "italic", marginTop: "5px" };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={emailStyle}>{email}</div>
      <div style={cityStyle}>City: {city}</div>
    </div>
  );
}

export default UserCard;
