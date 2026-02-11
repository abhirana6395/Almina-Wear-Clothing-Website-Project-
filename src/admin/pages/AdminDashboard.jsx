import StatCard from "../components/StatCard";

const AdminDashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Products" value="24" />
        <StatCard title="Orders" value="12" />
        <StatCard title="Users" value="8" />
        <StatCard title="Revenue" value="₹12,450" />
      </div>
    </>
  );
};

export default AdminDashboard;
