import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceComponent = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCart = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id)); // Remove from cart
    } else {
      setCart([...cart, id]); // Add to cart
    }
  };

  return (
    <div className="mt-20 min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Our Products
      </h1>

      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {error && (
        <div className="text-center text-red-500">
          <p>Error: {error}</p>
          <button
            onClick={fetchProducts}
            className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition duration-200"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Link to={`/service/${product.id}`}>
                <div>
                  <img
                    className="object-cover h-64 w-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                  {product.title.length > 20
                    ? product.title.substring(0, 20) + "..."
                    : product.title}
                </h2>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {product.category}
                </span>
                <span className="block font-bold text-indigo-600 mt-2">
                  ${product.price}
                </span>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">
                    {"★".repeat(Math.round(product.rating?.rate || 0))}
                    {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.rating?.count || 0} reviews)
                  </span>
                </div>
                <button
                  onClick={() => handleCart(product.id)}
                  className={`w-full mt-4 text-white font-bold py-2 px-4 rounded transition duration-200 ${
                    cart.includes(product.id)
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {cart.includes(product.id) ? "Cancel" : "Add to Cart"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceComponent;
