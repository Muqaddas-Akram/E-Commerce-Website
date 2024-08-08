import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaUserCircle, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { selectCartItems, removeFromCart } from '../../features/cart/cartSlice';

const Menu = [
  { id: 2, name: "Home", link: "/" },
  { id: 3, name: "Blog", link: "/Blog" },
  { id: 4, name: "Electric Devices", link: "/electric-devices" },
  { id: 5, name: "Household Appliance", link: "/household-appliance" },
  { id: 6, name: "Order History", link: "/order-history" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending-products" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-sky-500/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              Electronics
            </a>
          </div>

          {/* Search bar and cart button */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-sky-500 dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-sky-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              className="bg-gradient-to-r from-sky-500 to-sky-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <span className="group-hover:block hidden transition-all duration-200">Cart</span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              {isCartOpen && (
                <div className="absolute right-0 top-full mt-2 w-[300px] rounded-md bg-white dark:bg-gray-800 text-black dark:text-white shadow-md">
                  <ul>
                    {cartItems.length === 0 ? (
                      <li className="p-4">Your cart is empty</li>
                    ) : (
                      cartItems.map((item) => (
                        <li key={item.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                          <img className="w-16 h-16 object-cover" src={item.img} alt={item.title} />
                          <div className="flex-1 mx-2">
                            <p className="font-semibold">{item.title}</p>
                          </div>
                          <button
                            className="text-red-500"
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            Checkout
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </button>
            <Link to="/signup">
              <button
                className="bg-gradient-to-r from-sky-500 to-sky-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">Register</span>
                <FaUserCircle className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="block sm:hidden">
              <button
                className="text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="hidden sm:flex justify-center">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 py-2 hover:text-sky-500 duration-200">
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-2 py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-sky-500/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="container py-4 px-6">
          <button
            className="text-2xl text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="mt-4 space-y-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-sky-500/20">
                  {data.name}
                </a>
              </li>
            ))}
            <li className="relative">
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-900 dark:text-white">
                Trending Products
                <FaCaretDown className="transition-transform duration-200" />
              </a>
              <div className="absolute left-0 top-full mt-2 w-full rounded-md bg-white dark:bg-gray-800 shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-sky-500/20">
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
