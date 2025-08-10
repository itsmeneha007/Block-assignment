import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Main() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ padding: "20px" }}>
      <h1>
        {isLoggedIn ? "You are logged in! 🎉" : "Please log in to continue."}
      </h1>
    </main>
  );
}

export default Main;
