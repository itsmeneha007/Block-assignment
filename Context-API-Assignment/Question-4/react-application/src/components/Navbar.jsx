import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ background: "#333", color: "white", padding: "10px" }}>
      <h3>My App</h3>
      {user && (
        <div>
          Welcome, {user.name}!{" "}
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
