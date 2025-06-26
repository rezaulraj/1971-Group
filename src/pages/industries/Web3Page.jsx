import React from "react";
import HeroWeb3 from "./HeroWeb3";
import AnimatedBackgroundCard from "./AnimatedBackgroundCard";
import TrustedBy from "./TrusteBy";
import WhatWeDoWeb3 from "./WhatWeDoWeb3";

const Web3Page = () => {
  return (
    <div className="min-h-screen">
      <HeroWeb3 />
      {/* <AnimatedBackgroundCard /> */}
      <TrustedBy/>
      <WhatWeDoWeb3/>
    </div>
  );
};

export default Web3Page;
