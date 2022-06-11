import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "./NavBarComp.css";
import { BsSearch } from "react-icons/bs";

export default function NavBarComp() {
  return (
    <div>
      <Navbar bg="#4C6FFF" variant={"dark"} expand="lg" style={{background: "#4C6FFF",fontSize: "20px", fontFamily: "Nunito",color:"white",}}>
        <Container fluid>
          <Navbar.Brand href="#">МСП</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/">Компании</Nav.Link>
              <Nav.Link href="/product">Товары</Nav.Link>
              <Nav.Link href="/">О нас</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Поиск"
                className="me-2"

                aria-label="Search"
              />
              <Button className = "search-button" variant="outline-success" onClick={(e) => console.log("Search button clicked")}>🔍</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
