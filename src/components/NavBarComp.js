import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Image,
} from "react-bootstrap";
import "./NavBarComp.css";
import { Button } from "rsuite";

export default function NavBarComp() {
  return (
    <div>
      <Navbar
        bg="#4C6FFF"
        variant={"dark"}
        expand="lg"
        style={{
          background: "#4C6FFF",
          fontSize: "20px",
          fontFamily: "Nunito",
          color: "white",
        }}
      >
        <Container fluid>
          <Navbar.Brand
            style={{ fontSize: "24px", width: "20%", margin: "0 10px" }}
            href="/"
          >
            МСП
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav-link" href="/">
                Главная
              </Nav.Link>
              <Nav.Link className="nav-link" href="/">
                Компании
              </Nav.Link>
              <Nav.Link className="nav-link" href="/product">
                Товары
              </Nav.Link>
              <Nav.Link className="nav-link" href="/">
                О нас
              </Nav.Link>
            </Nav>

            <Form
              style={{ backgroundColor: "white" }}
              className="d-flex search-button"
            >
              <Button
                style={{ border: "0px" }}
                color="white"
                className="search-button"
                variant="outline-success"
                onClick={(e) => console.log("Search button clicked")}
              ></Button>
              <FormControl
                type="search"
                placeholder="Поиск"
                style={{ border: "0px" }}
                aria-label="Search"
              />
              <Button
                style={{ border: "0px" }}
                color="white"
                className="search-button"
                variant="outline-success"
                onClick={(e) => console.log("Search button clicked")}
              >
                <Image src={require("./zoom-lens.png")} />
              </Button>
            </Form>
            <a href='/product'>
              <Image style={{ margin: "0 15px" }} src={require("./market.svg")} />
            </a>
            <a href='/product'>
              <Image style={{ margin: "0 15px" }} src={require("./Notification.svg")} />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
