import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export default function PossibleProducts() {
    const [products, setProducts] = useState([]);
    const [newProducts, showNewProducts] = useState(6);
    const [fetching, setFetching] = useState(true);
  
    const showMoreProducts = () => {
      showNewProducts((prevValue) => prevValue + 6);
    };
  
    useEffect(() => {
      if (fetching) {
        const getData = async () => {
          fetch(
            `http://84.252.138.236:4201/api/products?count=${1000}&offset=0`
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
    
    //{products !== undefined ? showProducts() : <></>}
    return (
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <h1 style = {{display: "flex", marginLeft: "150px"}} className="custom-colored-h1">Похожие товары</h1>
        {console.log("Here me!!!")}
        <Row style={{ maxWidth: "90%", margin: "0 auto", marginTop: "10px", marginBottom: "10px" }} xs={2}>
          {products.slice(0, newProducts).map((i) => {
            let picture_url = "";
            if (i.images !== null && i.images[0] !== undefined) {
              picture_url = i.images[0].url;
            } else {
              picture_url =
                "https://kinesiotaping.ru/wp-content/plugins/ht-mega-for-elementor/assets/images/image-placeholder.png";
            }
            return (
              <a href={i.url} style={{ width: "30%", margin: "0 auto" }}>
              <Col key={i.id} >
              <div
              style={{
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
              }}>
                <img
                    alt={i.productName}
                    key={picture_url}
                    src={picture_url}
                    style={{
                        display: "block",
                        margin: "0 auto",
                        width: 200,
                        height: 200,
                        borderRadius: 10,
                        overflow: "hidden",
                        borderWidth: 3,
                        imageRendering: "crisp-edges",
                      }}
                  />
                <h2
                  className="text"
                >
                  {i.productName}
                </h2>
              </div>
              </Col>
              </a>
            );
          })}
        </Row>
        <Button
          key="nextbutton"
          className="next-button"
          style={{
            matgin: "0 auto",
            marginTop: "20px",
            width: "300px",
            height: "50px",
            fontSize: "25px",
          }}
          onClick={(e) => {
            showMoreProducts();
          }}
        >
          Загрузить ещё
        </Button>
      </div>
    );
}