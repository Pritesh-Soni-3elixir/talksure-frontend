import React from "react";

const HeroMobilev2 = () => {
  return (
    <div>
      <section className="container py-5 mt-5 mt-md-4 mb-md-3 mb-lg-4 mb-xl-5">
        <div className="row align-items-center align-items-lg-stretch mb-2 mb-sm-3">
          {/* Parallax gfx */}
          <div className="col-xl-7 col-md-6 d-flex justify-content-center justify-content-md-end overflow-hidden order-md-2 mt-n5 mt-sm-n4 mt-md-0">
            <div
              className="position-relative mt-5"
              style={{ maxWidth: "660px" }}
            >
              <div
                className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 rounded-3 opacity-15"
                style={{ height: "95%" }}
              ></div>
              <div className="parallax zindex-2">
                <div className="parallax-layer zindex-2 mb-n3" data-depth="0.1">
                  <img
                    src="assets/img/landing/app-showcase/hero/layer01.png"
                    alt="Device"
                  />
                </div>
                <div className="parallax-layer" data-depth="-0.22">
                  <img
                    src="assets/img/landing/app-showcase/hero/layer02.png"
                    alt="Bubble"
                  />
                </div>
                <div className="parallax-layer" data-depth="0.3">
                  <img
                    src="assets/img/landing/app-showcase/hero/layer03.png"
                    alt="Bubble"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text  */}
          <div className="col-xl-5 col-md-6 d-flex flex-column order-md-1">
            <div className="text-center text-md-start pt-4 pt-sm-5 pt-xl-0 mt-2 mt-sm-0 mt-lg-auto">
              <h1 className="display-3 mb-4">Buy Trade and Store in One App</h1>
              <p className="fs-lg mb-0 d-md-none d-xl-block">
                Odio venenatis a, non egestas ut ultrices ultrices quis orci
                ipsum eu tellus tempor sed amet mauris pellentesque ut vitae.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start pt-2 mt-4 mt-md-5">
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
            </div>
            <div className="d-sm-flex d-md-none d-lg-flex justify-content-center justify-content-md-start mt-auto pt-3 pt-md-0">
              <div className="d-flex align-items-center w-100 pe-xxl-2 mb-2 mb-md-0">
                <div className="h1 mb-0">23k+</div>
                <div className="ps-2 ms-1">downloads of the application</div>
              </div>
              <div className="vr d-none d-sm-block text-border my-2 mx-4"></div>
              <div className="d-flex align-items-center w-100 ps-xxl-2">
                <div className="h1 mb-0">13b+</div>
                <div className="ps-2 ms-1">trading volume per every day</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroMobilev2;
