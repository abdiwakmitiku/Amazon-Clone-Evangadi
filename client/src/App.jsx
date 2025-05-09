import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/Carousel/CarouselEffect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
