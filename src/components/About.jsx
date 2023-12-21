import React from 'react'
import "../styles.css"
import ShirtImage from '../assets/girlshirt.jpg'

function About() {
  return (
    <>
    <h1 style={{color:"black", paddingTop:"none"}}>About Us</h1>
    <h5  style={{color:"black"}}>
    Welcome to Fake Store – your ultimate destination for style enthusiasts! </h5>
    <img style={{width:"250px", height:"200px"}} src={ShirtImage}></img>
    
    
    
    
   <h5> Dive into a world where trends meet individuality, and fashion becomes a form of self-expression. Explore our carefully curated collection, where each piece is a statement waiting to be made. From casual essentials to runway-inspired looks, we've got your wardrobe covered. Immerse yourself in a seamless shopping experience, where quality meets affordability. Stay in vogue with our regularly updated catalog, ensuring you're always steps ahead in the style game. Whether you're seeking the latest runway trends or timeless classics, Fake Store is your go-to source for all things fabulous. Upgrade your fashion journey and let your unique style shine with us!</h5>
  
</>  )
}

export default About