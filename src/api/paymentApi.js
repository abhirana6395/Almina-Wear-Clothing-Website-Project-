import axios from "axios";

const API = "http://localhost:8080/api/payment";

export const createRazorpayOrder = (amount) =>
  axios.post(`${API}/create-order`, { amount });

export const verifyPayment = (payload) =>
  axios.post(`${API}/verify`, payload);