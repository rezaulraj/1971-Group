import React from "react";
import HeroHourLyRecruiting from "./HeroHourLyRecruiting";
import AboutRecruitmentServices from "./AboutRecuitmentServices";
import Benefits from "./Benefics";
import Guide from "./Guide";
import RecruitBlogs from "./RecouitBlogs";
import FrequentlyAsked from "./FrequentlyAsked";
import Contact from "../../home/Contact";

const HourlyRecruiting = () => {
  return (
    <div className="min-h-screen">
      <HeroHourLyRecruiting />
      <AboutRecruitmentServices />
      <Benefits />
      <Guide />
      <RecruitBlogs />
      <FrequentlyAsked />
      <Contact />
    </div>
  );
};

export default HourlyRecruiting;
