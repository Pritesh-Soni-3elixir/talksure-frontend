import React from "react";
import SignUpCTS from "../components/Contact/SignUpCTS";
import CoursesList from "../components/CoursesList/CoursesList";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const PortfolioCourses = () => (
  <div>
    <main className="page-wrapper">
      <Navbar />
      <section className="container">
        {/* Breadcrumb */}
        <nav className="pt-4 mt-lg-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="landing-online-courses.html">
                <i className="bx bx-home-alt fs-lg me-1" />
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Courses
            </li>
          </ol>
        </nav>
        <CoursesList />
        <SignUpCTS />
        <Footer />
      </section>
    </main>
  </div>
);

export default PortfolioCourses;
