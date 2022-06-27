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
      <Navbar
        sticky="top"
        bg="#4C6FFF"
        variant={"dark"}
        expand="lg"
        style={{
          boxShadow: "0 0 100px #ccc",
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
              <Nav.Link className="nav-link" href="/companies">
                Компании
              </Nav.Link>
              <Nav.Link className="nav-link" href="/product">
                Товары
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
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
            </Form>
            <Button style={{height: "100%",background: "rgba(255, 0, 0, 0)", borderWidth: "0px", position: "relative"}}>
              <Image style={{ margin: "0 15px" }} src={require("./market.svg")} />
              <div
                style={{
                  borderRadius: 15,
                  color: "white",
                  width: "1.25rem",
                  height: "1.25rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                  fontSize: "12px",
                  background: "red"
                }}>
                115
              </div>
            </Button>
            
            <a>
              <Image style={{ margin: "0 15px" }} src={require("./Notification.svg")} />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
