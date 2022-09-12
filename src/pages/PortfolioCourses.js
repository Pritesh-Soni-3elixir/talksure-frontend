import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
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
