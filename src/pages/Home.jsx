import ProductCard from "../components/ProductCard";
import video from "/images/backgroundVideo.mp4";
import { useEffect, useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import useScrollFade from "../hooks/useScrollFade";
import useCountUp from "../hooks/useCountUp";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAllProducts } from "../api/productApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  useScrollFade();

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredProducts = products.slice(0, 4);

  const collection = useCountUp(700);
  const category = useCountUp(8);
  const collaboration = useCountUp(5);
  const trends = useCountUp(380);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>

        <div className="relative z-10 h-full flex items-center px-6 sm:px-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">
              OUR LATEST <br />
              <span className="font-light">OFFERINGS</span>
            </h1>
            <p className="mt-4 text-blue-900">
              Discover premium fashion designed to elevate confidence.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-white">
        <h3 className="text-center text-5xl font-bold mb-10">OUR PRODUCT</h3>

        <div className="flex justify-center gap-4 mb-12">
          {["all", "hoodie", "jeans", "knit", "trousers"].map((cat) => (
            <button
              key={cat}
              onClick={() =>
                cat === "all"
                  ? navigate("/")
                  : navigate(`/shop?category=${cat}`)
              }
              className={`px-5 py-2 border ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* PERFECT MATCH */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <img src="/images/perfect match 2.jpeg" className="w-80 mx-auto" />

          <div>
            <h2 className="text-6xl font-bold">
              PERFECT <span className="font-light">MATCH</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Curated collections built for modern fashion.
            </p>

            <div className="grid grid-cols-4 gap-6 mt-10 text-center">
              <Stat num={collection} label="COLLECTION" />
              <Stat num={category} label="CATEGORY" />
              <Stat num={collaboration} label="COLLAB" />
              <Stat num={trends} label="TRENDS" />
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-5xl font-bold mb-12">
          BEST <span className="font-light">SELLERS</span>
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-10">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
};

const Stat = ({ num, label }) => (
  <div>
    <p className="text-2xl font-bold">{num}+</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

export default Home;
