import React from "react";
import Header from "./components/Header/Header"; 
import CarouselEffect from "./components/Carousel/CarouselEffect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from "./components/Category/Category";

function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category/>
    </>
  );
}

export default App;
