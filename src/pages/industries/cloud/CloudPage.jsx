import React from "react";
import HeroCloud from "./HeroCloude";
import WhatWeDoCloud from "./WhatWeDoCloud";
import CloudBenefic from "./CloudBenefic";
import WeHireCloud from "./WeHireCloud";
import CloudBlog from "./CloudBlog";
import SalarieCloud from "./SalarieCloud";
import HireCaseCloud from "./HireCaseCloud";
import CloudFrequent from "./CloudFrequent";
import CloudContact from "./CloudContact";

const CloudPage = () => {
  return (
    <div className="min-h-screen">
      <HeroCloud />
      <WhatWeDoCloud />
      <CloudBenefic />
      <WeHireCloud />
      <CloudBlog />
      <SalarieCloud />
      <HireCaseCloud />
      <CloudFrequent />
      <CloudContact />
    </div>
  );
};

export default CloudPage;
