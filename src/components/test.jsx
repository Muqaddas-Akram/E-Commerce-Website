import { useEffect, useState } from "react";
import axios from "axios";

const FatchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/search',
            params: {
              query: 'Phone',
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

  return (
    <div>
      <h1>Shipping Details</h1>
      {data.length > 0 ? (
        <div>
          {data.map((product) => (
            <div key={product.asin} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              <h2>{product.product_title}</h2>
              <img src={product.product_photo} alt={product.product_title} style={{ width: '100px', height: 'auto' }} />
              <p>Price: {product.product_price}</p>
              <p>Original Price: {product.product_original_price}</p>
              <p>Rating: {product.product_star_rating} Stars</p>
              <p>Reviews: {product.product_num_ratings} Ratings</p>
              <p>Delivery: {product.delivery}</p>
              <a href={product.product_url} target="_blank" rel="noopener noreferrer">View Product</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default FatchApi