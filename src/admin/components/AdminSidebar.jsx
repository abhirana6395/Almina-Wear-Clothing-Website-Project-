import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-black text-white p-6">
      <h2 className="text-2xl font-bold mb-10">ALMINA Admin</h2>

      <nav className="space-y-4">
        
        <NavLink to="/admin/dashboard">Dashboard</NavLink>

        <NavLink to="/admin/products" className="block hover:underline">
          Products
        </NavLink>
        <NavLink to="/admin/orders" className="block hover:underline">
          Orders
        </NavLink>
        <NavLink to="/admin/users" className="block hover:underline">
          Users
        </NavLink>

        <button
          onClick={handleLogout}
          className="mt-10 text-red-400 hover:underline"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
