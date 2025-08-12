import React from "react";
import HeroHome from "./HeroHome";
import WhatWeDo from "./WhatWeDo";
import WhyUs from "./WhyUs";
import Industries from "./Industies";
import Awards from "./Awards";
import Clients from "./Clients";
import Contact from "./Contact";
import Benefits from "../services/hourly-recruiting/Benefics";
import HireWorkers from "./HireWorkers";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <WhatWeDo />
      <WhyUs />
      <Industries />
      <Benefits />
      <HireWorkers />
      <Clients />
      <Awards />
      <Contact />
    </div>
  );
};

export default HomePage;
