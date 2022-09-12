import React from "react";
import HeroMobilev2 from "../components/Hero/HeroMobilev2";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
// import PageLoadingSpinner from "../components/PageLoadingSpinner/PageLoadingSpinner";
import StatsMobilev2 from "../components/Stats/StatsMobilev2";
import TradingFeature from "../components/TradingFeature/TradingFeature";

const MobileAppShowcaseV2 = () => (
  <div>
    {/* <PageLoadingSpinner /> */}
    <main className="page-wrapper">
      <Navbar />
      <HeroMobilev2 />
      <StatsMobilev2 />
      <TradingFeature />
      <HowItWorks />
    </main>
  </div>
);

export default MobileAppShowcaseV2;
