import React from "react";
import Footer from "../Components/Footer";
import NavHome from "../Components/NavHome";
import Hero from "../Components/Hero";
import HomeContent from "../Components/HomeContent";

const Home = () => {
  return (
    <div>
      <div className="container-sm">
        <NavHome />
        <Hero />
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
