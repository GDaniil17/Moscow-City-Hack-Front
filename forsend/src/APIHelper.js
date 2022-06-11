import axios from "axios";
import "./App.css";

const APIHelper =  () => {
  const url = `http://213.178.155.140:4201/api/products/productsByCompany?id=4&count=100`;
  fetch(url)
  .then(
    (res)=>{
      if (res.ok) 
        return res.json();
    }
  )
  .then((data) => {
    console.log(data)
    return data})
  // const response = await axios.get(url).catch((error) => {
  //   console.log(error);
  // });;
  // console.log(response.data)
  // return response.data;
};
export default APIHelper;
