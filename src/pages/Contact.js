import React from "react";
import EmailPhone from "../components/Contact/EmailPhone";
import FooterContact from "../components/Footer/FooterContact";
import HeroContact from "../components/Hero/HeroContact";
import NavbarContact from "../components/Navbar/NavbarContact";
import SocialNetworkCarousel from "../components/SocialNetwork/SocialNetworkCarousel";

const Contact = () => {
  return (
    <div>
      <div>
        {/* <PageLoadingSpinner /> */}
        <main className="page-wrapper">
          <NavbarContact />
          <HeroContact />
          <EmailPhone />
          <SocialNetworkCarousel />
        </main>
        <FooterContact />
      </div>
    </div>
  );
};

export default Contact;
