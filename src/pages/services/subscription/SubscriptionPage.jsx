import React from "react";
import HeroSubscription from "./HeroSubsription";
import AboutSubscription from "./AboutSubsription";
import KeyBenafic from "./KeyBenafic";
import HiringChallenge from "./HiringChalange";
import Guide from "./Guide";
import FrequentlyAskedSub from "./FrequentlyAskedSub";
import Contact from "../../home/Contact";
const SubscriptionPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSubscription />
      <AboutSubscription />
      <KeyBenafic />
      <HiringChallenge />
      <Guide />
      <FrequentlyAskedSub />
      <Contact />
    </div>
  );
};

export default SubscriptionPage;
