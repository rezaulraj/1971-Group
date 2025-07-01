import React from "react";
import HeroFinTech from "./HeroFinTech";
import ClientFintech from "./ClientFintech";
import WhatWeDoFintech from "./WhatWeDoFintech";
import FinancialTech from "./FinancialTech";
import AreaOfWork from "./AreaOfWork";
import WeHireFintech from "./WeHairFintech";
import ReportFinTech from "./ReportFinTech";
import FintechBlog from "./FintechBlog";
import DownloadFintech from "./DownloadFintech";
import FintechFrequent from "./FintechFrequent";
import FintechContact from "./FintechContact";

const FintechPage = () => {
  return (
    <div className="min-h-screen">
      <HeroFinTech />
      <ClientFintech />
      <WhatWeDoFintech />
      <FinancialTech />
      <AreaOfWork />
      <WeHireFintech />
      <ReportFinTech />
      <FintechBlog />
      <DownloadFintech />
      <FintechFrequent />
      <FintechContact />
    </div>
  );
};

export default FintechPage;
