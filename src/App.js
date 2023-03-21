import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
