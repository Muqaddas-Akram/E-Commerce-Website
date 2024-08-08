import React, { useState } from 'react';
import ProductModel from '../../Model/ProductModel'; 
import Img1 from "../../assets/products/fan.png";
import Img2 from "../../assets/products/fridge.png";
import Img3 from "../../assets/products/tv.png";
import Img4 from "../../assets/products/W.machine.png";
import Img5 from "../../assets/products/iphone.png";
import { FaStar } from "react-icons/fa"; // Correct import
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice'; // Ensure correct import

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "FAN",
    rating: 5.0,
    color: "Red",
    price: 50,
    description: "High-performance fan with multiple speed settings and a sleek design.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "FRIDGE",
    rating: 4.5,
    color: "Silver",
    price: 800,
    description: "Energy-efficient fridge with a spacious interior and modern features.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "TV",
    rating: 4.7,
    color: "Grey",
    price: 600,
    description: "Ultra HD TV with smart features and high-quality display.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "WASHING MACHINE",
    rating: 4.4,
    color: "Black",
    price: 350,
    description: "Front-load washing machine with multiple wash programs and energy efficiency.",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Iphone 14",
    rating: 4.5,
    color: "Black",
    price: 999,
    description: "Latest iPhone with advanced features and a sleek design.",
    aosDelay: "800",
  },
];

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    closeModal(); // Close modal after adding to cart
  };

  const handleViewAll = () => {
    window.location.href = '/trending-products';  
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-sky-500">
            Best Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Technology is a useful servant but a dangerous master.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 bg-sky-100 p-4 rounded-md shadow-md cursor-pointer"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                  onClick={() => openModal(data)}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <p className="text-lg font-semibold">${data.price}</p>
                  <button
                    className="bg-sky-500 text-white py-1 px-3 rounded-md mt-2"
                    onClick={() => handleAddToCart(data)} // Use handleAddToCart
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* View All button */}
          <div className="flex justify-center">
            <button
              onClick={handleViewAll}
              className="text-center mt-10 cursor-pointer bg-sky-500 text-white py-1 px-5 rounded-md"
            >
              View All
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <ProductModel
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        product={selectedProduct}
        onAddToCart={() => handleAddToCart(selectedProduct)} // Pass handleAddToCart
      />
    </div>
  );
};

export default Products;
