import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleCart = () => {
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id)); // Remove from cart
    } else {
      setCart([...cart, id]); // Add to cart
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500">Loading product details...</p>
    );
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 mt-20 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/2 px-4">
            <img
              className="w-full h-[400px] object-cover rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="md:w-1/2 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>

            <div className="text-gray-700 dark:text-gray-300 text-sm">
              <span className="font-bold">Category:</span> {product.category}
            </div>

            <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
              <span className="font-bold">Price:</span> ${product.price}
            </div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-lg">
                {"★".repeat(Math.round(product.rating?.rate || 0))}
                {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>

            <div className="mt-4">
              <button
                onClick={handleCart}
                className={`py-2 px-6 rounded-full font-bold ${
                  cart.includes(id)
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
              >
                {cart.includes(id) ? "Cancel" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
