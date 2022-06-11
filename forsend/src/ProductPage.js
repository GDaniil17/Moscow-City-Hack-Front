import React, { Component, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./App.css";
import Images from "./Images";

const ProductPage = () => {
const [selectedImg, setSelectedImg] = useState(Images[0])
  return (
    <div>
      <div className="container">
        <img
          src="https://www.4dk.ru/files/88723/misis-logo.png"
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
          {" "}
          <img
            style={{
              marginRight: "20px",
            }}
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt="option #"
          />
          <img
            style={{
              marginRight: "20px",
            }}
            src="https://www.4dk.ru/files/88723/misis-logo.png"
            alt="option #"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
