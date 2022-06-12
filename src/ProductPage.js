import React, { useState, useEffect } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";

const url = [
  "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1635310569109-38d12a1c4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const ProductPage = () => {
  //const url = `http://84.252.138.236:4201/api/products/productsByCompany?count=${100}&offset=${0}`;
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(100);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    // Handle the end of the current page position
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      products.length < totalCount
    ) {
      setFetching(true);
    }
  };
  useEffect(() => {
    if (fetching) {
      const getData = async () => {
        fetch(
          `http://84.252.138.236:4201/api/products/productsByQuery?count=${30}&offset=${
            currentPage * 30
          }`
        ) //get currently needed data
          .then((res) => {
            return res.ok
              ? res.json()
              : res.json().then((err) => Promise.reject(err));
          })
          .then((data) => {
            setCurrentPage((prevPage) => prevPage + 1);
            setProducts([...products, ...data.products]);
            setTotalCount(data.totalProjects);
            return data.products;
          })
          .catch(() => alert("Во время загрузки данных произошла ошибка:("))
          .finally(setFetching(false));
      };
      if (products.length <= 30 * (currentPage)) {
        getData();
      }
    }
  }, [fetching]);

  function showProducts() {
    console.log("!!!", products.length, (currentPage)*30);
    if (products.length >= 30*(currentPage)) {
    return (
      <Row style={{ maxWidth: "90%", margin: "0 auto" }} xs={2}>
        {[...Array(Math.min(products.length))].map((e, i) => {
          //products.length)].map((e, i) => {
          let picture_url = "";
          if (
            (currentPage - 1) * 30 + i < products.length &&
            products[(currentPage - 1) * 30 + i].images !== null &&
            products[(currentPage - 1) * 30 + i].images[0] !== undefined
          ) {
            picture_url = products[(currentPage - 1) * 30 + i].images[0].url;
          } else {
            picture_url =
              "https://kinesiotaping.ru/wp-content/plugins/ht-mega-for-elementor/assets/images/image-placeholder.png";
          }
          return (
            <Col
              key={products[i].id}
              style={{ width: "30%", margin: "0 auto" }}
            >
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
                {products[i].productName}
              </h2>
            </Col>
          );
        })}
      </Row>
    );
      }else{
        return <></>
      }
  }
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      {products !== undefined ? showProducts() : <></>}
    </div>
  );
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
