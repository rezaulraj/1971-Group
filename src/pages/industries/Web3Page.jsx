import React from "react";
import HeroWeb3 from "./HeroWeb3";
import AnimatedBackgroundCard from "./AnimatedBackgroundCard";
import TrustedBy from "./TrustedBy";
import WhatWeDoWeb3 from "./WhatWeDoWeb3";
import Web3Company from "./Wen3Company";
import Partners from "./Partners";
import WeHireWeb3 from "./WeHireWeb3";
import Speciality from "./Speciality";
import Download from "./Download";
import CaseStudy from "./CaseStudy";
import FrequentlyAskedWeb3 from "./FreaquentlyAskedWeb3";
import Web3Blog from "./Web3Blog";
import ContactWeb3 from "./ContactWeb3";

const Web3Page = () => {
  return (
    <div className="min-h-screen">
      <HeroWeb3 />
      {/* <AnimatedBackgroundCard /> */}
      <TrustedBy />
      <WhatWeDoWeb3 />
      <Web3Company />
      <Partners />
      <WeHireWeb3 />
      <Speciality />
      <Download />
      <CaseStudy />
      <FrequentlyAskedWeb3 />
      <Web3Blog />
      <ContactWeb3 />
    </div>
  );
};

export default Web3Page;
