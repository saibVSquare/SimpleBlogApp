import React, { useState } from "react";
import { useBlogContext } from "../../contexts/blog-context";

const InsertForm = () => {
  const { addBlog } = useBlogContext();

  const [formData, setFormData] = useState({
    author: "",
    content: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Create Blog</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="div-group">
              <label>Auther Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="author"
                value={formData.auther}
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="div-group">
              <label>Blog Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                value={formData.title}
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="form-group">
              <label>Insert Text</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                cols="30"
                maxLength={120}
                placeholder="Dummy Text"
                className="form-control"
                rows="3"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="mt-4 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertForm;
