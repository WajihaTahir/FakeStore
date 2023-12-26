import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Products from "./Products";

const Productsdetails = () => {
  const { state } = useLocation();
  console.log("location", state?.product);
  return (
    <>
    <img style={{width:"250px", height:"300px", float:"left"}} src={state.product.image}></img>
  <h1 style={{color:"black", fontSize:"22px"}}>{state.product.title}</h1>
  </>
  )
};

export default Productsdetails;
