import React from "react";
import ProductItem from "./productitem";

const ProductList = () => {
  const products = [
    { id: 121, name: "Product 1", price: 10, quantity: 1 },
    { id: 122, name: "Product 2", price: 20, quantity: 1 },
    { id: 123, name: "Product 3", price: 30, quantity: 1 },
    { id: 124, name: "Product 4", price: 40, quantity: 1 },
    { id: 125, name: "Product 5", price: 50, quantity: 1 },
    { id: 126, name: "Product 6", price: 60, quantity: 1 },
    { id: 127, name: "Product 7", price: 70, quantity: 1 },
    { id: 128, name: "Product 8", price: 80, quantity: 1 },
    { id: 129, name: "Product 9", price: 90, quantity: 1 },
    { id: 1210, name: "Product 10", price: 100, quantity: 1 },
  ];

  return (
    <div>
      {products.map((item, key) => (
        <ProductItem product={item} key={key} />
      ))}
    </div>
  );
};

export default ProductList;
