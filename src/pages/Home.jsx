import ProductCard from "../components/ProductCard";
import products from "../data/products";
import video from "/images/backgroundVideo.mp4";
import { useEffect, useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import useScrollFade from "../hooks/useScrollFade";
import useCountUp from "../hooks/useCountUp";
import { useSearchParams, useNavigate } from "react-router-dom";

const featuredProducts = products.slice(0, 4);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  /* 🔗 URL BASED FILTER (CATEGORY + SEARCH) */
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    const searchFromUrl = searchParams.get("search");

    setActiveCategory(categoryFromUrl || "all");
    setSearchQuery(searchFromUrl?.toLowerCase() || "");
  }, [searchParams]);

  /* ⏳ FAKE LOADING (SKELETON) */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  /* 🎭 SCROLL FADE */
  useScrollFade();

  /* 🧠 FILTER LOGIC */
  const filteredProducts = products.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(searchQuery)
  );

  /* 🔢 COUNT UPS */
  const collection = useCountUp(700);
  const category = useCountUp(8);
  const collaboration = useCountUp(5);
  const trends = useCountUp(380);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="relative z-10 h-full flex items-center px-6 sm:px-12">
          <div className="text-black max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block hero-line delay-1">OUR LATEST</span>
              <span className="block font-light hero-line delay-2">
                OFFERINGS
              </span>
            </h1>

            <p className="mt-4 text-blue-900 hero-line delay-3">
              Discover our latest offerings, featuring cutting-edge designs and
              premium quality
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-14 sm:py-20 bg-white">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-10">
          OUR PRODUCT
        </h3>

        {/* CATEGORIES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            ["all", "All"],
            ["hoodie", "Hoodie"],
            ["jeans", "Jeans"],
            ["knit", "Knit"],
            ["trousers", "Trousers"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() =>
                key === "all"
                  ? navigate("/")
                  : navigate(`/shop?category=${key}`)
              }
              className={`px-5 py-2 border transition
                ${
                  activeCategory === key
                    ? "bg-black text-white"
                    : "border-black hover:bg-black hover:text-white"
                }`}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>

      {/* PERFECT MATCH */}
      <section data-scroll className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/images/perfect match 2.jpeg"
              alt="Perfect Match"
              className="w-[300px] md:w-[380px] rotate-[-3deg] shadow-xl"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold">
              PERFECT <br />
              <span className="font-light">MATCH</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Explore our curated collection designed to suit your unique style.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
              <Stat num={collection} label="COLLECTION" />
              <Stat num={category} label="CATEGORY" />
              <Stat num={collaboration} label="COLLABORATION" />
              <Stat num={trends} label="TRENDS" />
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section data-scroll className="py-14 sm:py-20 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          BEST <span className="font-light">SELLERS</span>
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>
    </>
  );
};

/* 🔢 STAT */
const Stat = ({ num, label }) => (
  <div>
    <p className="text-2xl font-bold">{num}+</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

export default Home;
