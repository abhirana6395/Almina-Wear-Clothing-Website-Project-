import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

/* ===========================
   USER SIDE
=========================== */

// PLACE ORDER (Checkout)
export const placeOrder = async (orderData) => {
  const res = await API.post("/orders", orderData);
  return res.data;
};

// GET LOGGED-IN USER ORDERS
export const getUserOrders = async (email) => {
  const res = await API.get(`/orders/user?email=${email}`);
  return res.data;
};

/* ===========================
   ADMIN SIDE
=========================== */

export const fetchAdminOrders = async () => {
  const res = await API.get("/orders/admin");
  return res.data;
};

export const updateOrderStatus = async (orderId, status) => {
  return API.put(`/orders/${orderId}/status?status=${status}`);
};

