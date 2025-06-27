import React from "react";
import HeroWeb3 from "./HeroWeb3";
import AnimatedBackgroundCard from "./AnimatedBackgroundCard";
import TrustedBy from "./TrusteBy";
import WhatWeDoWeb3 from "./WhatWeDoWeb3";
import Web3Company from "./Wen3Company";
import Partners from "./Partners";
import WeHireWeb3 from "./WeHireWeb3";
import Speciality from "./Speciality";
import Download from "./Download";

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
    </div>
  );
};

export default Web3Page;
