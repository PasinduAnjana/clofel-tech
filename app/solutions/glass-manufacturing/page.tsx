import React from "react";
import Hero from "./components/hero";
import Challenges from "./components/challenges";
import { Features } from "./components/features";
import Journey from "./components/journey";

const Page = () => {
  return (
    <main className=" px-12">
      <Hero />
      <Challenges />
      <Journey />
      <Features />
    </main>
  );
};

export default Page;
