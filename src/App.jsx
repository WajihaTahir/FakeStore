import { useState, useEffect, Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Productmodal from "./components/Productmodal";
import Productsdetails from "./components/Productsdetails";
import Footer from "./components/Footer";

function App() {
  //   let Component;
  // switch(window.location.pathname)
  // {
  //   case "/":
  //   Component=Products
  //   break
  //   case "/about":
  //   Component=About
  //   break
  //   case "/allproducts":
  //   Component=Products
  //   break
  //   case "/men":
  //   Component=Men
  //   break
  //   case "/women":
  //   Component=Women
  //   break
  //   case "/electronics":
  //     Component=Electronics
  //   break
  //     case "/cart":
  //       Component=Cart
  //   break
  // }

  // let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [currentProduct, setCurrentProduct] = useState({});
  let [isModalOpen, setIsModalOpen] = useState(false);
  //let [isModalClose] = useState(true);



  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data);
    updateFetchedData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <Navbar />
      <div style={{marginBottom: '150px'}}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproducts" element={<Products results={fetchedData} onProductSelected={setCurrentProduct}
         onButtonPressed={setIsModalOpen}/>}/>
        <Route path="/favorite" element={<Favorites/> }/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product-detail" element={<Productsdetails/>}/>
      </Routes>
      {isModalOpen && (
          <Productmodal
            currentProduct={currentProduct}
            onbtnclicked={setIsModalOpen}
          />
        )}
        <Footer/>
    </>
  );
}

export default App;
