// ProductCard.jsx
import { useState } from "react";
import Modal from "../components/Modal"; // Import the Modal component
import { useProductStore } from "../store/product";

const ProductCard = ({ product, addToast }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isModalOpen, setModalOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      addToast(message, "success");
    } else {
      addToast(message, "error");
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    const { success, message } = await updateProduct(updatedProduct._id, updatedProduct);
    setModalOpen(false); // Close modal after update
    if (success) {
      addToast("Product updated successfully", "success");
    } else {
      addToast(message, "error");
    }
  };

  const openModal = () => {
    setUpdatedProduct(product); // Set product details in modal
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-xl font-bold text-gray-800">${product.price}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={openModal}
            className="bg-[#8fc8f1] text-white px-2 py-2 rounded-md hover:bg-[#63b3ed] transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil shrink-0 size-4"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2 shrink-0 size-4"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
          </button>
        </div>
      </div>

      {/* Modal for updating product */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={updatedProduct}
        onUpdate={handleUpdateProduct}
      />
    </div>
  );
};

export default ProductCard;