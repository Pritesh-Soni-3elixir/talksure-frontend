import React from "react";
import AppFeatures from "../components/AppFeatures/AppFeatures";
import BrandsCarouselMobilev1 from "../components/BrandsCarousel/BrandsCarouselMobilev1";
import Faq from "../components/FAQ/Faq";
import MoneyFeaturesMobilev1 from "../components/Features/MoneyFeaturesMobilev1";
import HeroMobilev1 from "../components/Hero/HeroMobilev1";
import HowItWorksSlider from "../components/HowItWorks/HowItWorksSlider";
import Navbar from "../components/Navbar/Navbar";
import PageLoadingSpinner from "../components/PageLoadingSpinner/PageLoadingSpinner";
import Subscription from "../components/Subscription/Subscription";
import Ratings from "../components/Testimonials/Ratings";
import FooterMobilev1 from "../components/Footer/FooterMobilev1";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const MobileAppShowcaseV1 = () => {
  return (
    <div>
      {/* <PageLoadingSpinner /> */}
      <main className="page-wrapper">
        <Navbar />
        <HeroMobilev1 />
        <BrandsCarouselMobilev1 />
        <AppFeatures />
        <HowItWorksSlider />
        <MoneyFeaturesMobilev1 />
        <Ratings />
        <Faq />
        <Subscription />
      </main>
      <FooterMobilev1 />
      <BackToTopButton />
    </div>
  );
};

export default MobileAppShowcaseV1;
