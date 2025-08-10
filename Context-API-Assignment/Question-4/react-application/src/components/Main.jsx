import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Main() {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
      setUsername("");
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      {!user ? (
        <>
          <h2>Please Login</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
            Login
          </button>
        </>
      ) : (
        <h2>Welcome Back, {user.name}!</h2>
      )}
    </main>
  );
}
