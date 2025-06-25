import React from "react";
import HeroCompnay from "./HeroCompnay";
import MissionVision from "./MissionVission";
import OurValue from "./OurValue";
import CompanyBlog from "./CompanyBlog";
import Contact from "../home/Contact";

const Compnay = () => {
  return (
    <div className="min-h-screen">
      <HeroCompnay />
      <MissionVision />
      <OurValue />
      <CompanyBlog/>
      <Contact/>
    </div>
  );
};

export default Compnay;
