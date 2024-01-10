// router.js
import React from "react";
import Blog from "./components/page/blog";
import StorePage from "./components/page/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/store/cart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InsertForm from "./components/blog/insert";
import BlogDetail from "./components/blog/detail.tsx";
import HomePage from "./components/page/home";
import { useCartContext } from "./contexts/cart-context";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Routess = () => {
  const { cartCount, totalPrice } = useCartContext();

  return (
    <BrowserRouter>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Home Page
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/store">
                  Store
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  Cart ({cartCount > 0 ? cartCount : 0}) - Total :{" "}
                  {totalPrice > 0 ? totalPrice : 0}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/store" element={<StorePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/add-blog" element={<InsertForm />}></Route>
          <Route path="/blog-detail/:title" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routess;
