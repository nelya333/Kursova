import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuComponent = () => {
  const styles = {
    marginRight: "10px",
    textDecoration: "none",
    color: "white",
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Книгарня</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" style={styles}>
            Додому
          </Link>
          <Link to="/basket" style={styles}>
            Кошик
          </Link>
          <Link to="/contact" style={styles}>
            Контакти
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MenuComponent;
