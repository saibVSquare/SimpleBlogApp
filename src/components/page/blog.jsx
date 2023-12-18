import React from "react";
import BlogListing from "../blog/listing";
import InsertForm from "../blog/insert";
import { useBlogContext } from "../../contexts/blog-context";

const Blog = () => {
  const { blogs } = useBlogContext();

  return (
    <div className="">
      <br />
      <br />
      <InsertForm />

      {blogs.map((item, key) => (
        <BlogListing blog={item} key={key}></BlogListing>
      ))}
    </div>
  );
};

export default Blog;
