import React from "react";
import { Link } from "react-router-dom";

const BlogListing = ({ blog }) => {
  return (
    <div className="container my-5">
      <div
        style={{ maxWidth: "700px", top: "-80px" }}
        className="mx-auto text-secondary position-relative"
      >
        <div className="text-center mb-4">
          <h1 className="text-center font-weight-bold text-dark">
            <Link to={`/blog-detail/${blog.title}`}>{blog.title}</Link>
          </h1>
          <div>
            <small className="text-dark">Written by : {blog.author}</small>
          </div>
        </div>

        <p className="my-2" style={{ lineHeight: "2" }}>
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogListing;
