import React from "react";
import HeroHome from "./HeroHome";
import WhatWeDo from "./WhatWeDo";
import WhyUs from "./WhyUs";
import Industries from "./Industies";
import Awards from "./Awards";
import Clients from "./Clients";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <WhatWeDo />
      <WhyUs />
      <Industries />
      <Awards />
      <Clients />
      <Contact />
    </div>
  );
};

export default HomePage;
