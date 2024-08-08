import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaStar } from 'react-icons/fa';

const ProductModel = ({ isOpen, onRequestClose, product, onAddToCart }) => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleOpenOrderForm = () => setIsOrderFormOpen(true);
  const handleCloseOrderForm = () => setIsOrderFormOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order details:', formData);
    // Close form and modal
    handleCloseOrderForm();
    onRequestClose();
  };

  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details"
      className="flex items-center justify-center p-4 max-w-lg mx-auto w-full"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-1/2 h-auto object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(Math.round(product.rating))].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            {[...Array(5 - Math.round(product.rating))].map((_, i) => (
              <FaStar key={i + Math.round(product.rating)} className="text-gray-300" />
            ))}
            <span className="ml-2 text-gray-600">{product.rating}</span>
          </div>
          <p className="text-lg font-semibold mb-2">${product.price}</p>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <div className="flex gap-4">
            <button
              onClick={onAddToCart}
              className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-200"
              aria-label="Add to Cart"
            >
              Add to Cart
            </button>
            <button
              onClick={handleOpenOrderForm}
              className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-200"
              aria-label="Order Now"
            >
              Order Now
            </button>
            <button
              onClick={onRequestClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
              aria-label="Close Modal"
            >
              Close
            </button>
          </div>
          {/* Order Form Modal */}
          {isOrderFormOpen && (
            <Modal
              isOpen={isOrderFormOpen}
              onRequestClose={handleCloseOrderForm}
              contentLabel="Order Form"
              className="flex items-center justify-center p-4 max-w-lg mx-auto w-full"
              overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
                <button
                  onClick={handleCloseOrderForm}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 text-2xl"
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">Order Form</h2>
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Phone No</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-200"
                  >
                    Submit Order
                  </button>
                </form>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProductModel;
