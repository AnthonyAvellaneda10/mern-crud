// Modal.jsx
import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => {
    setUpdatedProduct(product); // Reset the product when modal is opened
  }, [product]);

  const handleUpdate = () => {
    onUpdate(updatedProduct);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-gray-600 bg-opacity-50`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-500 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <input
          type="text"
          value={updatedProduct.name}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Product Name"
        />
        <input
          type="number"
          value={updatedProduct.price}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Price"
        />
        <input
          type="text"
          value={updatedProduct.image}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Image URL"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={handleUpdate}
            className="bg-[#8fc8f1] text-white px-4 py-2 rounded-md hover:bg-[#63b3ed] transition duration-300"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;