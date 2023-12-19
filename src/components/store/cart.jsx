import React from "react";
import { useCartContext } from "../../contexts/cart-context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Cart = () => {
  const { carts } = useCartContext();
  return (
    <>
      <Container>
        {carts.map((item, key) => (
          <Row xs={4} md={6} lg={4} key={key}>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Title : {item.name}</Card.Title>
                  <Card.Text>Price : {item.price}</Card.Text>
                  <Card.Text>Quantity : {item.quantity}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Cart;
