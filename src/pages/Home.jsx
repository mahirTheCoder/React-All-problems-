import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Banner />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 mt-8">
          <p className="text-gray-600">
            We curated a small selection of our favorite items — connect your
            API and provide a product list to render here dynamically.
          </p>
        </div>

        <BestSelling />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
