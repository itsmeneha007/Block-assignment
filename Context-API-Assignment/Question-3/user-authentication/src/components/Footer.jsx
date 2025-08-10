import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ background: "#eee", padding: "10px", marginTop: "20px" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
}

export default Footer;
