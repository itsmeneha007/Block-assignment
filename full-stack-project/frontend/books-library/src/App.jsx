import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import Auth from "./pages/Auth";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

