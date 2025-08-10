import React from "react";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
