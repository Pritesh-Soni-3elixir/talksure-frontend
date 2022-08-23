import React from "react";
import Awards from "../components/Awards/Awards";
import BenefitsAbout from "../components/Features/BenefitsAbout";
import HeroAbout from "../components/Hero/HeroAbout";
import NavbarAbout from "../components/Navbar/NavbarAbout";
import PageLoadingSpinner from "../components/PageLoadingSpinner/PageLoadingSpinner";
import VideoShowreel from "../components/VideoShowreel/VideoShowreel";

const About = () => {
  return (
    <div>
      {/* <PageLoadingSpinner /> */}
      <main className="page-wrapper">
        <NavbarAbout />
        <HeroAbout />
        <BenefitsAbout />
        <VideoShowreel />
        <Awards />
      </main>
    </div>
  );
};

export default About;
