import React from "react";
import EmailPhone from "../components/Contact/EmailPhone";
import FooterContact from "../components/Footer/FooterContact";
import HeroContact from "../components/Hero/HeroContact";
import Navbar from "../components/Navbar/Navbar";
import SocialNetworkCarousel from "../components/SocialNetwork/SocialNetworkCarousel";

const Contact = () => (
  <div>
    <div>
      {/* <PageLoadingSpinner /> */}
      <main className="page-wrapper">
        <Navbar />
        <HeroContact />
        <EmailPhone />
        <SocialNetworkCarousel />
      </main>
      <FooterContact />
    </div>
  </div>
);

export default Contact;
