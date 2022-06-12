import React, { Component, useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./App.css";
import Images from "./Images";
import { Row, Col } from "react-bootstrap";

const url = [
  "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1635310569109-38d12a1c4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const url = `http://213.178.155.140:4201/api/products/productsByCompany?id=4&count=100`;
  useEffect(() => {
    const getData = async () => {
      fetch(url)
        .then((res) => {
          return res.ok
            ? res.json()
            : res.json().then((err) => Promise.reject(err));
        })
        .then((data) => {
          console.log(data);
          return data;
        })
        .then(setProducts)
        .catch(() => alert("Во время загрузки данных произошла ошибка:("));
    };
    getData();
    console.log(products);
  }, []);

  function showProducts() {
    return (
      <Row style={{ maxWidth: "90%", margin: "0 auto" }} xs={2}>
        {[...Array(products.length)].map((e, i) => {
          console.log(products[i].images[0].url, i);
          return (
            <Col style={{ width: "30%", margin: "0 auto" }}>
              <img
                src={products[i].images[0].url}
                style={{
                  width: "100%",
                  display: "block",
                  margin: "0 auto",
                }}
                alt="Card image cap"
              />
              <h2
                style={{
                  overflow: "hidden",
                }}
              >
                {products[i].productName}
              </h2>
            </Col>
          );
        })}
      </Row>
    );
  }
  return <div style = {{marginBottom: "20px", marginTop: "20px"}}>{products !== undefined ? showProducts() : <></>}</div>;
};

/*
  return (
    <div>
      <div className="container">
        <img
          src={url[0]}
          alt="Текущая картинка"
          className="selected"
        />
        <div
          class="center-in"
          style={{
            display: "flex",
            padding: "40px 0 0 0",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              marginRight: "20px",
            }}
            src={url[1]}
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src={url[2]}
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src={url[3]}
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src={url[4]}
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src={url[0]}
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src={url[1]}
            alt="option #"
          />
        </div>
      </div>
    </div>
  );
};
*/
export default ProductPage;
