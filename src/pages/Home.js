import React from "react";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import Footer from "../components/Footer/Footer";
import HeroHome from "../components/Hero/HeroHome";
import Landings from "../components/Landings/Landings";
import MainFeaturesSwiper from "../components/MainFeaturesSwiper/MainFeaturesSwiper";
import MoreFeaturesGrid from "../components/MoreFeaturesGrid/MoreFeaturesGrid";
import Navbar from "../components/Navbar/Navbar";
// import PageLoadingSpinner from "../components/PageLoadingSpinner/PageLoadingSpinner";

const Home = () => (
  <>
    {/* <PageLoadingSpinner /> */}
    <main className="page-wrapper">
      <Navbar />
      <HeroHome />
      <MainFeaturesSwiper />
      <Landings />
      <MoreFeaturesGrid />
    </main>
    <Footer />
    <BackToTopButton />
  </>
);

export default Home;
