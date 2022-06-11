import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

export default function NavBarComp() {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Импортозамещение, фирмы Москвы</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/product">Товары</Nav.Link>
              <Nav.Link href="/lc">Личный кабинет</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Поиск"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={(e) => console.log("Search button clicked")}>Искать</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
