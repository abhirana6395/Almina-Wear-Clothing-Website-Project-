import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getAllProducts = () => API.get("/products");

export const getProductsByCategory = (category) =>
  API.get(`/products/category/${category}`);

// ADMIN
export const createProduct = (data) =>
  API.post("/admin/products", data);

export const deleteProduct = (id) =>
  API.delete(`/admin/products/${id}`);
