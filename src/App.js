import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Categories from "./components/Categories";
import About from "./components/About";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App(){
  return (
    <div className="antialiased">
      <Navbar />
      <main className="pt-6">
        <Home />
        <Services />
        <Categories />
        <About />
        <CTA />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}


