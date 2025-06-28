import React from "react";
import HeroAi from "./HeroAi";
import WhatWeDoAi from "./WhatWeDoAi";
import AiNumberJobInc from "./AiNumberJobInc";

const AiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-black to-orange-950 overflow-x-hidden">
      <HeroAi />
      <WhatWeDoAi />
      <AiNumberJobInc />
    </div>
  );
};

export default AiPage;
