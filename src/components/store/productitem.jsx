import React from "react";
import { useCartContext } from "../../contexts/cart-context";
const ProductItem = ({ product }) => {
  const { addToCart } = useCartContext();

  const addCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="container">
      <ul>
        <li>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addCart(product)} className="btn btn-primary">
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductItem;
