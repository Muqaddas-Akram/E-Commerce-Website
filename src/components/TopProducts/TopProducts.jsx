// src/components/TopProducts.jsx
import React, { useState } from 'react';
import ProductModel from "../../Model/ProductModel";
import { FaStar } from 'react-icons/fa';
import Img1 from "../../assets/top/wire.png";
import Img2 from "../../assets/top/drone.png";
import Img3 from "../../assets/top/USB.png";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice'; 

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Data Cable",
    price: "$10",
    description: "High-quality data cable for fast and reliable data transfer.",
    rating: 4.0,
  },
  {
    id: 2,
    img: Img2,
    title: "Drone",
    price: "$300",
    description: "Advanced drone with high-resolution camera and long battery life.",
    rating: 4.5,
  },
  {
    id: 3,
    img: Img3,
    title: "USB",
    price: "$15",
    description: "Fast and durable USB drive with ample storage capacity.",
    rating: 3.5,
  },
];

const TopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(); // Use useDispatch hook

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    handleCloseModal(); // Close modal after adding to cart
  };

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-sky-500">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            The great growling engine of change - technology.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-sky-50 dark:bg-gray-800 hover:bg-sky-200 dark:hover:bg-sky-700 hover:text-sky-900 dark:hover:text-white relative shadow-xl duration-300 group max-w-[300px] cursor-pointer"
              onClick={() => handleOpenModal(data)}
              key={data.id}
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  {[...Array(Math.round(data.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - Math.round(data.rating))].map((_, i) => (
                    <FaStar key={i + Math.round(data.rating)} className="text-gray-300" />
                  ))}
                </div>
                <h1 className="text-xl font-bold text-sky-900">{data.title}</h1>
                <p className="text-gray-600 group-hover:text-sky-900 duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-sky-500 hover:bg-sky-600 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-sky-500 duration-300"
                  onClick={() => handleOpenModal(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        <ProductModel
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          product={selectedProduct}
          onAddToCart={() => handleAddToCart(selectedProduct)} // Pass handleAddToCart
        />
      </div>
    </div>
  );
};

export default TopProducts;
