import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Library</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {user && <Link to="/mybooks">My Books</Link>}
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout} className="underline">Logout</button>
          </>
        ) : (
          <Link to="/auth" style={{color:"white", textDecoration:"none", fontWeight:"500", padding:'10px'}}>Login/Register</Link>
        )}
      </div>
    </nav>
  );
}
