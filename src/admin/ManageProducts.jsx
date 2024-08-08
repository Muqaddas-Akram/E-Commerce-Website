import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard'
const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend
    // Example: fetch('/api/products').then(response => response.json()).then(data => setProducts(data));
  }, []);

  return (
    <>
    <Dashboard/>
    <div className="p-6">
      <h1 className="text-xl text-center font-bold mb-4">Manage Products</h1>
      {/* Render your products list here */}
    </div>
    </>
  );
};

export default ManageProducts;
