import React from "react";
import HeroGuide from "./HeroGuide";
import Guides from "./Guides";

const GuidePage = () => {
  return (
    <div className="min-h-screen">
      <HeroGuide />
      <Guides/>
    </div>
  );
};

export default GuidePage;
