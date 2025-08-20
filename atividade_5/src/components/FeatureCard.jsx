import React from "react";
import Card from "./Card";
import Title from "./Title";
import tv from "../assets/interactive_space.svg";
import world from "../assets/public.svg";
import download from "../assets/download.svg";

const FeatureCard = () => {
  return (
    <section
      className="flex flex-col
     gap-4 p-4 lg:grid lg:grid-cols-3 lg:gap-2"
    >
      <Card>
        <Title>Enjoy on your TV</Title>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <div className="flex flex-row justify-end py-2 px-4">
          <img src={tv} className="w-12 h-12" alt="" />
        </div>
      </Card>
      <Card>
        <Title>Download your shows to watch offline</Title>
        <p>Save your favorites easily and always have something to watch.</p>

        <div className="flex flex-row justify-end py-2 px-4 ">
          <img src={download} className="w-12 h-12" alt="" />
        </div>
      </Card>
      <Card>
        <Title>Watch everywhere</Title>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>

        <div className="flex flex-row justify-end py-2 px-4">
          <img src={world} className="w-12 h-12" alt="" />
        </div>
      </Card>
    </section>
  );
};

export default FeatureCard;
