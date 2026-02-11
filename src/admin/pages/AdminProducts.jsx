import { useEffect, useState } from "react";
import { getAllProducts, createProduct, deleteProduct } from "../../api/productApi";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const load = () => {
    getAllProducts().then((res) => setProducts(res.data));
  };

  useEffect(load, []);

  const addProduct = (e) => {
    e.preventDefault();
    createProduct(form).then(() => {
      setShow(false);
      setForm({ name: "", price: "", category: "", image: "" });
      load();
    });
  };

  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <button onClick={() => setShow(true)} className="bg-black text-white px-6 py-2">
          + Add Product
        </button>
      </div>

      <table className="w-full bg-white shadow">
        <thead>
          <tr>
            <th>Name</th><th>Category</th><th>Price</th><th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>
                <button
                  onClick={() => deleteProduct(p.id).then(load)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <form onSubmit={addProduct} className="bg-white p-6 rounded w-96 space-y-3">
            <input placeholder="Name" className="border p-2 w-full"
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Price" type="number" className="border p-2 w-full"
              onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <input placeholder="Category" className="border p-2 w-full"
              onChange={(e) => setForm({ ...form, category: e.target.value })} />
            <input placeholder="Image URL" className="border p-2 w-full"
              onChange={(e) => setForm({ ...form, image: e.target.value })} />

            <button className="bg-black text-white px-4 py-2 w-full">
              Add Product
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminProducts;
