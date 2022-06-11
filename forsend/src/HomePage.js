import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ReactElasticCarousel from "react-elastic-carousel";
import Item from "./Item";
import React, { useState, useRef, useEffect } from "react";
import APIHelper from "./APIHelper";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const url = `http://213.178.155.140:4201/api/products/productsByCompany?id=4&count=100`;
  useEffect(() => {
    
    const getData = async () => {
      fetch(url)
      .then((res) => {return res.ok ? res.json() : res.json().then((err)=>Promise.reject(err))})
      .then((data) => {
        console.log(data)
        return data
      })
      .then(setProducts)
      .catch(() => alert("Во время загрузки данных произошла ошибка:("))
    }
    getData();
    console.log(products)
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const urls = [
    "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    "https://images.unsplash.com/photo-1635310569109-38d12a1c4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  const names = ["Одежда", "Строительство", "Техника", "Книги", "Автомобили"];

  const productTag = [
    "Очки 200 рублей",
    "Настольная лампа 500 рублей",
    "Куртка 1500 рублей",
  ];

  const productUrls = [
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
  ];

  function itemCreator() {
    return (
      <div className="Top" style={{ margin: 10 }}>
        <ReactElasticCarousel breakPoints={breakPoints}>
          {Array(5)
            .fill(1)
            .map((el, i) => (
              <Item
                key={uuidv4()}
                style={{ backgroundImage: "url(" + urls[i] + ")" }}
              >
                {names[i]}
              </Item>
            ))}
        </ReactElasticCarousel>
      </div>
    );
  }

  function productCreator() {
    return (
      <>
        {Array(10)
          .fill(1)
          .map((el, i) => (
            <div
              class="center-in"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {Array(3)
                .fill(1)
                .map((el, i) => (
                  <div
                    style={{
                      width: "25%",
                      height: "25%",
                      margin: "0 15px",
                    }}
                  >
                    <img
                      alt={i}
                      style={{
                        width: "100%  ",
                        height: "100%",
                        display: "block",
                        margin: "0 auto",
                        resizeMode: "cover",
                      }}
                      src={productUrls[i]}
                    />
                    <h2 style={{ textAlign: "center" }}>{productTag[i]}</h2>
                  </div>
                ))}
            </div>
          ))}
      </>
    );
  }
  


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Агрегатор импортозамещения</h1>

      {itemCreator()}
      {productCreator()}

      {products !== undefined ? products.map((val) =><li>{val.productName}</li>) : <h1>1</h1>}

      <footer>
        <div
          style={{ marginBottom: "15px" }}
          class="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <img
            id="misis"
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt=""
          />

          <p
            style={{ margin: "0 15px" }}
            class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"
          >
            Copyright © 2022 Moscow City Hack — All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
