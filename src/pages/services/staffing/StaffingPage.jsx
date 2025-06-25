import React from "react";
import HeroStaffing from "./HeroStaffing";
import OurGrowth from "./OurGrouth";
import Industries from "../../home/Industies";
import TechnoloyStack from "./TechnoloyStack";
import WhyWorkUsStaffing from "./WhyWorkUsStaffing";
import WhyUs from "../../home/WhyUs";
import OurProcessStaffing from "./OurProcessStaffing";
import StaffingServices from "./StaffingServices";
import ItStaffing from "./ItStafing";
import Contact from "../../home/Contact";
import StaffingFrequentlyAsked from "./StaffingFrequentlyAsked";

const StaffingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroStaffing />
      <OurGrowth />
      <Industries />
      <TechnoloyStack />
      <WhyWorkUsStaffing />
      <WhyUs />
      <OurProcessStaffing />
      <StaffingServices />
      <ItStaffing />
      <StaffingFrequentlyAsked />
      <Contact />
    </div>
  );
};

export default StaffingPage;
