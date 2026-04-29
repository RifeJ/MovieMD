import React from "react";
import Header from "../components/Header";
import Trends from "../components/Trends";
import Movies from "../components/Movies";
import GoldenGlobe from "../components/GoldenGlobe";
import Series from "../components/Series";
import Subscriptions from "../components/Subscriptions";
import Collection from "../components/Collection";
import ActorsDirestors from "../components/ActorsDirestors";
import OmniQuestions from "../components/OmniQuestions";

function Home() {
  return (
    <div>
      <Header />
      <Trends />
      <Movies />
      <GoldenGlobe />
      <Series />
      <Subscriptions />
      <Collection />
      <ActorsDirestors />
      <OmniQuestions />
    </div>
  );
}

export default Home;
