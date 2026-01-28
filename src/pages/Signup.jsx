import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    signup({ name: "New User", email: "new@almina.com" });
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Join ALMINA ✨
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <input className="w-full border p-4 rounded-xl" placeholder="Full Name" />
          <input className="w-full border p-4 rounded-xl" placeholder="Email" />
          <input className="w-full border p-4 rounded-xl" placeholder="Password" />

          <button className="w-full py-4 rounded-xl bg-black text-white">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
