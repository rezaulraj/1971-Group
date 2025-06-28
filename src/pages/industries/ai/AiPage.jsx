import React from "react";
import HeroAi from "./HeroAi";
import WhatWeDoAi from "./WhatWeDoAi";
import AiNumberJobInc from "./AiNumberJobInc";
import WeHire from "./WeHire";
import TalentWork from "./TalentWork";
import TalentWorkText from "./TalentWorkText";

const AiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-black to-orange-950 overflow-x-hidden">
      <HeroAi />
      <WhatWeDoAi />
      <AiNumberJobInc />
      <WeHire />

      <TalentWorkText />
      <TalentWork />
    </div>
  );
};

export default AiPage;
