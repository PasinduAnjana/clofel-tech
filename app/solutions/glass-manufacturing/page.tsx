import React from "react";
import Hero from "./components/hero";
import Challenges from "./components/challenges";
import Features from "./components/features";

const Page = () => {
  return (
    <main className=" px-12">
      <Hero />
      <Challenges />
      <Features />
    </main>
  );
};

export default Page;
