import React from "react";
import Awards from "../components/Awards/Awards";
import ContactCta from "../components/Contact/ContactCta";
import BenefitsAbout from "../components/Features/BenefitsAbout";
import FooterAbout from "../components/Footer/FooterAbout";
import HeroAbout from "../components/Hero/HeroAbout";
import Navbar from "../components/Navbar/Navbar";
import PageLoadingSpinner from "../components/PageLoadingSpinner/PageLoadingSpinner";
import Team from "../components/Team/Team";
import TestimonialClientsSwiper from "../components/Testimonials/TestimonialClientsSwiper";
import VideoShowreel from "../components/VideoShowreel/VideoShowreel";

const About = () => {
  return (
    <div>
      {/* <PageLoadingSpinner /> */}
      <main className="page-wrapper">
        <Navbar />
        <HeroAbout />
        <BenefitsAbout />
        <VideoShowreel />
        <Awards />
        <TestimonialClientsSwiper />
        <Team />
        <ContactCta />
      </main>
      <FooterAbout />
    </div>
  );
};

export default About;
