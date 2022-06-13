import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function ProductPage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("продукты");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      console.log(searchTitle);
      const response = await axios.get(
        `http://84.252.138.236:4201/api/products/productsByQuery?query=${searchTitle}`
      );
      console.log(response.data);
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, [searchTitle]);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .map((item) => {
            return (
              <div>
                <img
                      alt={item.productName}
                      key={item.url}
                      src={item.images[0].url}
                      style={{
                        padding: "0",
                        minHeight: "200px",
                        width: "200px",
                        imageRendering: "crisp-edges",
                        margin: "0 auto",
                      }}
                    />
                    
                <h2 className="text">{item.productName}</h2>
              </div> )
          }
          )
      )
        }
      </div>
  )
}

export default ProductPage;
/*
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "rsuite";
import "./ProductPage.css";
import axios from 'axios';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Image,
} from "react-bootstrap";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, showNewProducts] = useState(30);
  const [fetching, setFetching] = useState(false);
  const [search, setSearch] = useState('продукты');

  const showMoreProducts = () => {
    showNewProducts((prevValue) => prevValue + 30);
  };

  useEffect(() => {
    const getData = async () => {
      setFetching(true)
      let url = search === '' ? `http://84.252.138.236:4201/api/products/productsByQuery?query=${search}`:
      `http://84.252.138.236:4201/api/products?count=${1200}&offset=0`; 
      //|search;
      const response = await axios.get(url);
      setProducts(response.data);
      setFetching(false)
      /*
      const getData = async () => {
        setFetching(true);
        fetch(url)
          .then((res) => {
            return res.ok
              ? res.json()
              : res.json().then((err) => Promise.reject(err));
          })
          .then((data) => {
            console.log(data);
            if (search === '') {
            setProducts([...products, ...data.products]);
            return data.products;
            }else{
              setProducts(...data)
              return data;
            }
          })
          .catch(() => alert("Во время загрузки данных произошла ошибка:("))
          .finally(setFetching(false));
          *//*
        }
      getData();
  }, []);

  function searchFunction () {
    setSearch();
    setFetching(true);
  }

  const onChange = (event) => {
    setSearch(event.target.value);
  }

  //{products !== undefined ? showProducts() : <></>}
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      {console.log("Here me!!!")}
      <Form
        style={{ backgroundColor: "grey",width: "80%", marginLeft: "17px",
        borderColor:"grey",
        borderStyle:"solid" }}
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
          onChange={onChange}
          style={{ border: "0px" }}
          aria-label="Search"
        />
        <Button
          style={{ border: "0px" }}
          color="white"
          className="search-button"
          variant="outline-success"
          onClick={(e) => searchFunction()}
        >
          <Image src={require("./imgs/zoom-lens.png")} />
        </Button>
      </Form>
      <Row
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        xs={2}
      >

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
              <Col key={i.id}>
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
                  }}
                >
                  <img
                    alt={i.productName}
                    key={picture_url}
                    src={picture_url}
                    style={{
                      padding: "0",
                      minHeight: "200px",
                      width: "200px",
                      imageRendering: "crisp-edges",
                      margin: "0 auto",
                    }}
                  />
                  <h2 className="text">{i.productName}</h2>
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
        Далее
      </Button>
    </div>
  );
};

export default ProductPage;
*/
