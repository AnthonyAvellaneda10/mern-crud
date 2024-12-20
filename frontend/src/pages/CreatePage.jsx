import { useState } from "react";
import Toast from "../components/Toast";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [toasts, setToasts] = useState([]);

  const { createProduct } = useProductStore();

  const addToast = (message, status) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, status }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000); // Desaparece después de 3 segundos
  };

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      addToast(message, "error");
    } else {
      addToast(message, "success");
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-3xl font-bold text-center dark:text-white">Create New Product</h1>

          <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />

              <button
                className="w-full bg-[#90cdf4] text-black px-4 py-2 rounded-md hover:bg-[#63b3ed] focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            status={toast.status}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>
    </>
  );
};

export default CreatePage;