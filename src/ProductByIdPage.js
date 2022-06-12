import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import PossibleProducts from "./PossibleProducts";

const ProductByIdPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
      const getData = async () => {
        fetch(`http://84.252.138.236:4201/api/products/getById?Id=8000`)
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

  function getUrl() {
    let picture_url = "";
    console.log(products);
    if (products && products[0].images !== null && products[0].images[0] !== undefined) {
      picture_url = products[0].images[0].url;
    } else {
      picture_url =
        "https://kinesiotaping.ru/wp-content/plugins/ht-mega-for-elementor/assets/images/image-placeholder.png";
    }
    return picture_url;
  }

  return (
    <div>
        {products !== undefined ? products.map((val) =><li>{val.productName}</li>) : <h1>1</h1>}
      {products !== undefined ? 
        products.map((val) =>
        <div>
            <div style={{width: "100%", marginLeft: "100px"}}>
                <img
                src={getUrl()}
                style={{
                width: "50%",
                display: "flex",
                minHeight: "200px",
                width: "300px",
                imageRendering: "crisp-edges",
                }}
                alt="Card image cap"
                />

                <h2
                    style={{
                    overflow: "hidden",
                    }}
                >
                    {products.productName}
                </h2>
          </div>
        </div>
      ) : (
        <></>
      )}
      <PossibleProducts/>
    </div>
  );
};

export default ProductByIdPage;
