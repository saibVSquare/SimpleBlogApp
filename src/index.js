import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BlogProvider } from "./contexts/blog-context";
import { CartProvider } from "./contexts/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlogProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BlogProvider>
  </React.StrictMode>
);

reportWebVitals();
