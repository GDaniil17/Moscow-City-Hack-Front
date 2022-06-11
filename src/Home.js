import useFetch from "./useFetch";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ReactElasticCarousel from "react-elastic-carousel";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./ProductPage";
import HomePage from "./HomePage";


const Home = () => {
  return (
     <HomePage />
  );
}
 
export default Home;