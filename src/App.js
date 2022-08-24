import React from "react";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Top />
      <Feature />
      <Footer />

    </>
  );
}

export default App;
