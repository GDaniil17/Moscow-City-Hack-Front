import axios from "axios";
import "./App.css";

async function APIHelper () {
  const url = `http://213.178.155.140:4201/api/products/productsByCompany?id=4&count=100`;

  const response = await axios.get(url).catch((error) => {
    console.log(error);
  });;
  console.log(response.data)
  return response.data;
};
export default APIHelper;
