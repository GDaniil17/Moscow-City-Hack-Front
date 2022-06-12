import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "rsuite";
import "./ProductPage.css";

const url = [
  "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1635310569109-38d12a1c4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, showNewProducts] = useState(30);
  const [fetching, setFetching] = useState(true);

  const showMoreProducts = () => {
    showNewProducts((prevValue) => prevValue + 30);
  };

  useEffect(() => {
    if (fetching) {
      const getData = async () => {
        fetch(
          `http://84.252.138.236:4201/api/products/productsByQuery?count=${31}&offset=0`
        )
          .then((res) => {
            return res.ok
              ? res.json()
              : res.json().then((err) => Promise.reject(err));
          })
          .then((data) => {
            setProducts([...products, ...data.products]);
            return data.products;
          })
          .catch(() => alert("Во время загрузки данных произошла ошибка:("))
          .finally(setFetching(false));
      };
      getData();
    }
  }, [fetching]);

  function showProducts() {
    return <></>;
  }
  //{products !== undefined ? showProducts() : <></>}
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      {console.log("Here me!!!")}
      <Row style={{ maxWidth: "90%", margin: "0 auto" }} xs={2}>
        {products.slice(0, newProducts).map((i) => {
          let picture_url = "";
          if (i.images !== null && i.images[0] !== undefined) {
            picture_url = i.images[0].url;
          } else {
            picture_url =
              "https://kinesiotaping.ru/wp-content/plugins/ht-mega-for-elementor/assets/images/image-placeholder.png";
          }
          return (
            <Col key={i.id} style={{ width: "30%", margin: "0 auto" }}>
              <img
                src={picture_url}
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
                {i.productName}
              </h2>
            </Col>
          );
        })}
      </Row>
      <Button
        key="nextbutton"
        className="next-button"
        style={{
          matgin: "0 auto",
          marginTop: "20px",
          width: "200px",
          height: "50px",
          fontSize: "30px",
        }}
        color="black"
        onClick={(e) => {
          showMoreProducts();
        }}
      >
        Далее
      </Button>
    </div>
  );
};

export default ProductPage;
