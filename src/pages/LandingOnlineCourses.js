import React from "react";
import LandingOnlineCoursesContent from "../components/LandingOnlineCoursesContent/LandingOnlineCoursesContent";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LandingOnlineCourses = () => (
    <div>
      <main className="page-wrapper">
        <Navbar />
        <LandingOnlineCoursesContent />
        <Footer />
      </main>
    </div>
  );

export default LandingOnlineCourses;
