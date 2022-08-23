import React from "react";

const HeroMobilev1 = () => {
  return (
    <div>
      <section
        className="overflow-hidden pt-5"
        style={{
          background:
            "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
        }}
      >
        <div className="container pt-3 pt-sm-4 pt-xl-5">
          <div className="row pt-md-2 pt-lg-5">
            <div className="col-md-5 d-flex flex-column mt-md-4 pt-5 pb-3 pb-sm-4 py-md-5">
              <h1 className="display-4 text-center text-md-start mb-4">
                Manage All Your Money in One App
              </h1>
              <p className="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4 mb-lg-5">
                We offer you a new generation of the mobile banking.
                <br />
                Save, spend & manage money in your pocket.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                <a
                  href="#"
                  className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3"
                >
                  <img
                    src="assets/img/market/appstore-light.svg"
                    className="light-mode-img"
                    width="124"
                    alt="App Store"
                  />
                  <img
                    src="assets/img/market/appstore-dark.svg"
                    className="dark-mode-img"
                    width="124"
                    alt="App Store"
                  />
                </a>
                <a href="#" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                  <img
                    src="assets/img/market/googleplay-light.svg"
                    className="light-mode-img"
                    width="139"
                    alt="Google Play"
                  />
                  <img
                    src="assets/img/market/googleplay-dark.svg"
                    className="dark-mode-img"
                    width="139"
                    alt="Google Play"
                  />
                </a>
              </div>
              <div className="position-relative d-inline-flex align-items-center justify-content-center justify-content-md-start mt-auto pt-3 pt-md-4 pb-xl-2">
                <a
                  href="#features"
                  className="btn btn-icon btn-light bg-white stretched-link rounded-circle me-3"
                  data-scroll
                  data-scroll-offset="120"
                >
                  <i className="bx bx-chevron-down"></i>
                </a>
                <span className="fs-sm">Discover more</span>
              </div>
            </div>
            <div className="col-md-7 align-self-end">
              <div
                className="position-relative overflow-hidden mt-4 pb-3 pt-4 mx-auto me-md-0"
                style={{ maxWidth: "632px" }}
              >
                <div className="ratio ratio-1x1"></div>
                <img
                  src="assets/img/landing/app-showcase/hero-phone-1.png"
                  className="rellax position-absolute top-0 start-0 zindex-2"
                  data-rellax-speed="1.6"
                  data-disable-parallax-down="md"
                  alt="Phone"
                />
                <img
                  src="assets/img/landing/app-showcase/hero-phone-2.png"
                  className="rellax position-absolute top-0 start-0"
                  data-rellax-speed="2.8"
                  data-disable-parallax-down="md"
                  alt="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroMobilev1;
