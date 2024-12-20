import { useEffect, useState } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addToast = (message, status) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, status }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000); // Toast disappears after 3 seconds
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Current Products 🚀
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToast={addToast} // Pass addToast as prop
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center text-gray-500 font-bold text-xl">
            No products found 😢{" "}
            <Link to="/create" className="text-blue-500 hover:underline">
              Create a product
            </Link>
          </div>
        )}
      </div>

      {/* Show Toasts globally */}
      <div className="absolute top-4 right-4 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            status={toast.status}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage