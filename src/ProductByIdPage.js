import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import PossibleProducts from "./PossibleProducts";
import "./ProductByIdPage.css";

const ProductByIdPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    const getData = async () => {
      fetch(`http://84.252.138.236:4201/api/products/getById?Id=${id}`)
        .then((res) => {
          return res.ok
            ? res.json()
            : res.json().then((err) => Promise.reject(err));
        })
        .then((data) => {
          setProducts(data);
          console.log(data);
          return data;
        })
        .catch(() => alert("Во время загрузки данных произошла ошибка:("));
    };
    getData();
  }, []);

  function getImageUrl() {
    let picture_url = "";
    console.log(products);
    if (
      products &&
      products[0].images !== null &&
      products[0].images[0] !== undefined
    ) {
      picture_url = products[0].images[0].url;
    } else {
      picture_url =
        "https://kinesiotaping.ru/wp-content/plugins/ht-mega-for-elementor/assets/images/image-placeholder.png";
    }
    return picture_url;
  }

  function getName() {
    let productName = "";
    if (products && products[0].productName !== null) {
      productName = products[0].productName;
    }
    return productName;
  }

  function getProductUrl() {
    let productUrl = "";
    if (products && products[0].url !== null) {
      productUrl = products[0].url;
    }
    return productUrl;
  }

  return (
    <div>
      <Row
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        xs={2}
      ></Row>
      <Col key={getImageUrl()}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            width: "100%",
            background: "rgb(255, 255, 255)",
            margin: "0 15px",
            marginBottom: "15px",
            flexDirection: "column",
            borderRadius: "2rem",
            mozBoxShadow: "0 0 3px #ccc",
            webkitBoxShadow: "0 0 3px #ccc",
            boxShadow: "0 0 10px #ccc",
          }}
        >
          <img
            alt={getName()}
            key={getImageUrl()}
            src={getImageUrl()}
            style={{
              padding: "0",
              minHeight: "200px",
              width: "200px",
              imageRendering: "crisp-edges",
              margin: "0 auto",
            }}
          />

          <h2 className="custom-colored-h1">{getName()}</h2>
          <div>
            <a href={getProductUrl()}>
              <Button
                key="CallSeller"
                className="next-button"
                style={{
                  matgin: "0 auto",
                  marginTop: "20px",
                  width: "300px",
                  height: "50px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Связаться с продавцом
              </Button>
            </a>

            <Button
              key="CallSeller"
              className="cart-button"
              style={{
                background: "white",
                color: "#4D70FF",
                marginLeft: "10px",
                matgin: "0 auto",
                marginTop: "20px",
                width: "300px",
                height: "50px",
                fontSize: "20px",
                border: "2px #4D70FF",
                fontWeight: "bold",
                borderColor: "black"
              }}
            >
              В корзину
            </Button>
          </div>
        </div>
      </Col>
    </div>
  );
};
//<PossibleProducts />

export default ProductByIdPage;
