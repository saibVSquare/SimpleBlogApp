// router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertForm from "./components/blog/insert";
import BlogListing from "./components/blog/listing";
import Blog from "./components/page/blog";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/insert-blog" element={<InsertForm />} />
        <Route path="/blog-listing" element={<BlogListing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
