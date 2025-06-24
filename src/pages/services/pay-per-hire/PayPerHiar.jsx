import React from "react";
import HeroPayPerHire from "./HeroPayPerHire";
import WhyUsService from "./WhyUsService";
import ServicesRecuit from "./ServicesRecuit";
import Benefits from "../hourly-recruiting/Benefics";
import Guide from "../hourly-recruiting/Guide";
import PayRecuitBlog from "./PayRecuitBlog";
import PayFrequentlyAsked from "./PayFrequentlyAsked";
import Contact from "../../home/Contact";

const PayPerHiar = () => {
  return (
    <div className="min-h-screen">
      <HeroPayPerHire />
      <WhyUsService />
      <ServicesRecuit />
      <Benefits />
      <Guide />
      <PayRecuitBlog />
      <PayFrequentlyAsked />
      <Contact />
    </div>
  );
};

export default PayPerHiar;
