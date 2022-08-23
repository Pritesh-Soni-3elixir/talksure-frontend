import React from "react";

const HeroHome = () => {
  return (
    <div>
      <section
        className="dark-mode vh-100 bg-repeat-0 bg-position-center bg-size-cover overflow-hidden"
        style={{ backgroundImage: "url(assets/img/landing/intro/hero/bg.jpg)" }}
      >
        <div className="container vh-100">
          <div className="row flex-nowrap vh-100">
            <div className="col-lg-4 col-md-5 d-flex flex-column text-center text-md-start py-5">
              <h1 className="display-3 mt-auto mb-4">Silicon</h1>
              <p className="lead text-light opacity-70 pb-5 mb-0 mb-md-3">
                Multipurpose Business /<br className="d-none d-md-inline" />
                Technology Template
              </p>
              <img
                src="assets/img/landing/intro/hero/switcher.svg"
                width="212"
                className="d-block mx-auto mx-md-0"
                alt="Light / Dark Mode"
              />
              <div className="position-relative d-flex align-items-center justify-content-center justify-content-md-start mb-md-4 mb-lg-5 mt-auto">
                <div className="btn btn-icon btn-secondary rounded-circle">
                  <i className="bx bx-chevron-down"></i>
                </div>
                <a
                  href="#landings"
                  className="nav-link stretched-link text-light fw-normal opacity-80 py-2 px-3"
                  data-scroll
                  data-scroll-offset="70"
                >
                  View Landings
                </a>
              </div>
            </div>
            <div className="d-flex flex-shrink-0 align-items-start">
              <img
                src="assets/img/landing/intro/hero/screens01.png"
                className="rellax d-block flex-shrink-0 mt-n5"
                width="486"
                height="1390"
                alt="Screens"
                data-rellax-speed="4"
                data-disable-parallax-down="md"
              />
              <img
                src="assets/img/landing/intro/hero/screens02.png"
                className="rellax d-block flex-shrink-0 mt-5"
                width="486"
                height="1470"
                alt="Screens"
                data-rellax-speed="-4"
                data-disable-parallax-down="md"
              />
              <img
                src="assets/img/landing/intro/hero/screens03.png"
                className="rellax d-block flex-shrink-0"
                width="486"
                height="1480"
                alt="Screens"
                data-rellax-speed="4"
                data-disable-parallax-down="md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroHome;
