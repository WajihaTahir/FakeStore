import React from "react";
import { useEffect } from "react";
import "../App.css";

function Products({ results }) {
  useEffect(() => {
    // console.log("res...", results);
  }, [results]);
  if (results) {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent : 'center', alignItems: 'center'}}>
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
                height: '500px',
                display:'flex',
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1 em",
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img className="productImage"
                  src={image}
                  alt="#"
                  style={{ width: "210px", height: "250px", padding: "20px" ,  boxShadow:"10px 10px 10px #ccc", borderRadius:"10px"}}
                />
                <div className="product-description">
                  <h6 style={{color:"black"}}>{title}</h6>
                  <h6 style={{ color: "black" }}>{`Price: ${price}`}</h6>
                  <button>Add To Cart</button>
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
