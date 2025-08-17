import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { loginUser, registerUser } from "../api/api";

export default function Auth() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = isRegister
        ? await registerUser({ email, password })
        : await loginUser({ email, password });
      setUser(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="border p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-2 border rounded p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-2 border rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {isRegister ? "Register" : "Login"}
        </button>
        <p className="mt-2 text-sm text-center">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <button type="button" onClick={() => setIsRegister(!isRegister)} className="underline ml-1">
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
}

