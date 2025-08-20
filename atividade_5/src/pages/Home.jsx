import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import AccordionComponent from "../components/AccordionComponent";
import Title from "../components/Title";
import Header from "../components/Header";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  return (
    <main className="bg-[url(../assets/bg-movie-cinema.jpg)] text-white max-w-screen min-h-screen">
      <Header />
      {/* hero section */}
      <section className="flex flex-col items-center justify-center h-[50vh] p-8">
        <div>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 lg:text-8xl">Watchit</h1>
            <p className="text-lg font-semibold lg:text-2xl">
              Your favorite movies are here, check them out and get details
              about of
            </p>

            <button
              type="button"
              onClick={() => navigate("/search")}
              className="bg-slate-700 border-2 border-slate-600 font-semibold rounded-md p-3 mt-4 lg:text-2xl lg:px-8 hover:bg-slate-600 transition duration-300 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="h-4/7 text-center">
        <Title>What's Trending</Title>
        <Carousel />
      </section>
      <section className="flex items-center justify-center h-4/7 flex flex-col">
        <Title>Why us?</Title>
        <FeatureCard />
      </section>
      <section className="text-center">
        <Title>Frequently Asked Questions</Title>
        <AccordionComponent />
      </section>
      <section>
        <Footer></Footer>
      </section>
    </main>
  );
};

export default Home;
