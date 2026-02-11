import { useAuth } from "../../context/AuthContext";

const AdminTopbar = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="font-semibold">Admin Panel</h1>
      <p className="text-sm text-gray-600">
        Logged in as <b>{user?.email}</b>
      </p>
    </header>
  );
};

export default AdminTopbar;
