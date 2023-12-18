import "./App.css";
import Blog from "./components/page/blog";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InsertForm from "./components/blog/insert";
import BlogDetail from "./components/blog/detail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-blog">Add Blog</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Blog />}></Route>
          <Route path="/add-blog" element={<InsertForm />}></Route>
          <Route path="/blog-detail/:title" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
