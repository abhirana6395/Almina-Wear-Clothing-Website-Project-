import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: "Demo User", email: "demo@almina.com" });
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome Back 🖤
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input className="w-full border p-4 rounded-xl" placeholder="Email" />
          <input className="w-full border p-4 rounded-xl" placeholder="Password" />

          <button className="w-full py-4 rounded-xl bg-black text-white">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline font-medium">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
