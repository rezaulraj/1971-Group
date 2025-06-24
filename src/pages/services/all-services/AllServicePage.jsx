import React from "react";
import HeroServices from "./HeroServices";
import WhatWeDoServices from "./WhatWeDoServices";
import OurProcess from "./OurProcess";
import Industries from "../../home/Industies";
import WhyUs from "../../home/WhyUs";
import Benefits from "./Benefits";
import SecretSauce from "./SecretSauce";
import CaseStudies from "./CaseStudies";
import Contact from "../../home/Contact"
const AllServicePage = () => {
  return (
    <div className="min-h-screen">
      <HeroServices />
      <WhatWeDoServices />
      <OurProcess />
      <Industries />
      <WhyUs />
      <Benefits />
      <SecretSauce />
      <CaseStudies />
      <Contact />
    </div>
  );
};

export default AllServicePage;
