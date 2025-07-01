import React from "react";
import HeroFinTech from "./HeroFinTech";
import ClientFintech from "./ClientFintech";
import WhatWeDoFintech from "./WhatWeDoFintech";
import FinancialTech from "./FinancialTech";
import AreaOfWork from "./AreaOfWork";

const FintechPage = () => {
  return (
    <div className="min-h-screen">
      <HeroFinTech />
      <ClientFintech />
      <WhatWeDoFintech />
      <FinancialTech />
      <AreaOfWork />
    </div>
  );
};

export default FintechPage;
