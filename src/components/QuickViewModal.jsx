import Button from "./Button";

const sizes = ["S", "M", "L", "XL"];
const colors = ["#000000", "#C19A6B", "#8B0000"];

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl p-6 relative animate-fade-up">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[350px] object-cover rounded-xl"
          />

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">₹{product.price}</p>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Select Size</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className="px-3 py-1 border hover:bg-black hover:text-white transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Colors</p>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <span
                    key={c}
                    className="w-6 h-6 rounded-full border cursor-pointer"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
