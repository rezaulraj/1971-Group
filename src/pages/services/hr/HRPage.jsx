import React from "react";
import HeroHr from "./HeroHr";
import OurExpertise from "./OurExpertise";
import WhyChoseUsHr from "./WhyChoseUsHr";
import OurProcessHr from "./OurProcessHr";
import Industries from "../../home/Industies";
import WhyUs from "../../home/WhyUs";
import HrServices from "./HrServices";
import Contact from "../../home/Contact";

const HRPage = () => {
  return (
    <div className="min-h-screen">
      <HeroHr />
      <OurExpertise />
      <WhyChoseUsHr />
      <OurProcessHr />
      <Industries />
      <WhyUs />
      <HrServices />
      <Contact />
    </div>
  );
};

export default HRPage;
