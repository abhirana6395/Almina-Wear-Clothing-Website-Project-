const Orders = () => {
  const orders = [
    {
      id: "ALM12345",
      date: "12 Aug 2025",
      status: "Delivered",
      total: 129.99,
    },
    {
      id: "ALM12346",
      date: "20 Aug 2025",
      status: "Processing",
      total: 79.99,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold">Order ID: {order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>

              <div className="text-right">
                <p className="font-bold">₹{order.total}</p>
                <p
                  className={`text-sm ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
