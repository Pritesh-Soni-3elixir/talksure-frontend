import React from "react";
import Navbar from "../components/Navbar/Navbar";

const PortfolioCourses = () => {
  return (
    <div>
      <main className="page-wrapper">
        <Navbar />
        <section className="container">
          {/* Breadcrumb */}
          <nav className="pt-4 mt-lg-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="landing-online-courses.html">
                  <i className="bx bx-home-alt fs-lg me-1"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Courses
              </li>
            </ol>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default PortfolioCourses;
