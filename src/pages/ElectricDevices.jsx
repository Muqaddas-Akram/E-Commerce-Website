import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ElectricDevices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: 'electric-devices',
          page: '1',
          country: 'US',
          sort_by: 'RELEVANCE',
          product_condition: 'ALL'
        },
        headers: {
          'x-rapidapi-key': '07170b0badmsh45029e3654dc5efp1df6cdjsnf54305b2fb52',
          'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data.data.products); // Update state with the fetched products
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="w-full mt-10">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-20 mt-0 text-center">Electric Devices</h1>
          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((product) => (
                <div key={product.asin} className="border border-gray-300 bg-sky-200 text-black p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-medium mb-2">{product.product_title}</h2>
                  <div className="w-full h-48 overflow-hidden flex justify-center items-center mb-4">
                    <img src={product.product_photo} alt={product.product_title} className="object-contain h-full w-full" />
                  </div>
                  <p className="font-bold">Price: {product.product_price}</p>
                  <p className="text-green-500 line-through">Original Price: {product.product_original_price}</p>
                  <div className="flex items-center mt-2">
                    {renderStars(product.product_star_rating)}
                    <span className="text-blue-500 ml-2">({product.product_num_ratings} Ratings)</span>
                  </div>
                  <p className="mt-2">Delivery: {product.delivery}</p>
                  <a href={product.product_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-block mt-4">View Product</a>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ElectricDevices;
