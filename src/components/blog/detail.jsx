import React from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../contexts/blog-context";

const BlogDetail = () => {
  const { title } = useParams();
  const { blogs } = useBlogContext();
  const blog = blogs.find((blog) => blog.title === title);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container my-5">
      <div
        style={{ maxWidth: "700px", top: "-80px" }}
        className="mx-auto text-secondary position-relative"
      >
        <div className="text-center mb-4">
          <h1 className="text-center font-weight-bold text-dark">
            {blog.title}
          </h1>
          <div>
            <small className="text-dark">Written by: {blog.author}</small>
          </div>
        </div>

        <p className="my-2" style={{ lineHeight: "2" }}>
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
