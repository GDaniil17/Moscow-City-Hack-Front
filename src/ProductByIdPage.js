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
    if (
      products &&
      products[0].productName !== null
    ) {
        productName = products[0].productName
    }
    return productName;
  }

  function getProductUrl() {
    let productUrl = "";
    if (
      products &&
      products[0].url !== null
    ) {
        productUrl = products[0].url
    }
    return productUrl;

  }

  return (
    <div>
      <Row>
        <Row><Col>
          <img
            src={getImageUrl()}
            style={{
              width: "50%",
              display: "flex",
              minHeight: "200px",
              width: "300px",
              imageRendering: "crisp-edges",
            }}
            alt="Card image cap"
          />
          
        </Col>
        <Col>
        <h1 style = {{display: "flex", marginLeft: "150px"}} className="custom-colored-h1">{getName()}</h1>
        </Col>
        </Row>
        <Col>
        <a href = {getProductUrl()}>
        <Button
          key="CallSeller"
          className="next-button"
          style={{
            matgin: "0 auto",
            marginTop: "20px",
            width: "300px",
            height: "50px",
            fontSize: "25px",
          }}>Связаться с продавцом</Button>
          </a>
        </Col>
      </Row>
      <Row />
    </div>
  );
};
//<PossibleProducts />

export default ProductByIdPage;
