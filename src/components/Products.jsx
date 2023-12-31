import React from "react";
import { useEffect } from "react";
import "../styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Products({ results, onButtonPressed, onProductSelected }) {
  const navigate = useNavigate();

  function onimageclicked(product) {
    onButtonPressed(true);
    onProductSelected(product);
  }

  useEffect(() => {
    console.log("res...", results);
  }, [results]);
  if (results) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {results.map((each) => {
          let { id, title, price, description, category, image, rating } = each;
          return (
            <div
              key={id}
              className="productcardimage"
              style={{
                padding: "1em",
                flexDirection: "column",
                width: "300px",
                height: "500px",
                display: "flex",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1 em",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    className="productImage"
                    src={image}
                    alt="#"
                    style={{
                      width: "210px",
                      height: "250px",
                      padding: "20px",
                      boxShadow: "10px 10px 10px #ccc",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      onimageclicked(each);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h6 style={{ color: "black", fontSize: "14px" }}>{title}</h6>
                  <h6
                    style={{
                      color: "black",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >{`Price: $ ${price}`}</h6>
                  <button
                    onClick={() => {
                      navigate("/product-detail", { state: { product: each } });
                    }}
                    className="findmore"
                    style={{
                      display: "flex",
                      borderRadius: "20px",
                      width: "120px",
                      color: "white",
                    }}
                  >
                    Find More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return <></>;
}

export default Products;
