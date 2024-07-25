import { useAsyncAxiosAll } from "../hooks/useAxiosAsyncFetch";
import React, { useEffect, useState } from "react";
const baseUrl = "http://localhost:3500/products";

function ProductPage() {
  const token = "NA";
  const { data, loading, error } = useAsyncAxiosAll({
    url: baseUrl,
    method: "GET",
    body: {},
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params: {},
    timeout: 0,
  });

  // const handleFetch = () => {}
  // console.log(error);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div className="border border-red-700 border-4 m-4 p-2">
        <h2 className="text-3xl py-2 text-red-400">
          Error has been Caught... Below are the details...
        </h2>
        <ul>
          {Object.entries(error).map((element, index) => (
            <li key={index}>
              <strong>{element[0]}:</strong> {String(element[1])}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="m-4 p-2 border border-blue-300">
      <h1 className="text-3xl py-2">Product List Page</h1>
      <div className="border border-green-400 m-2 p-2 w-[8vw] text-center hover:cursor-pointer">
        Fetch All
      </div>
      <div className="border border-red-600 m-2 p-2 w-[8vw] text-center hover:cursor-pointer">
        Delete All
      </div>
      <ul>
        {data.map((element, index) => {
          return (
            <li key={index}>
              {element.product} - {element.category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProductPage1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
