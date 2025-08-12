import React from "react";
import HeroCompnay from "./HeroCompnay";
import MissionVision from "./MissionVission";
import OurValue from "./OurValue";
import CompanyBlog from "./CompanyBlog";
import Contact from "../home/Contact";
import Benefits from "../services/hourly-recruiting/Benefics";

const Compnay = () => {
  return (
    <div className="min-h-screen">
      <HeroCompnay />
      <MissionVision />
      <OurValue />
      <Benefits />
      <CompanyBlog />
      <Contact />
    </div>
  );
};

export default Compnay;
