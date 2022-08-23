import React from "react";

const MainFeaturesSwiper = () => {
  return (
    <div>
      <section className="container pt-5">
        <div
          className="swiper mt-n3 mt-md-0 pt-md-4 pt-lg-5 mx-n2"
          data-swiper-options='{
          "slidesPerView": 1,
          "spaceBetween": 8,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "navigation": {
            "prevEl": "#prev-news",
            "nextEl": "#next-news"
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 2
            },
            "700": {
              "slidesPerView": 3
            },
            "1000": {
              "slidesPerView": 4
            }
          }
        }'
        >
          <div className="swiper-wrapper">
            {/* Item */}
            <div className="swiper-slide h-auto pb-3">
              <div className="card card-hover bg-light border-0 animation-on-hover h-100 mx-2">
                <lottie-player
                  className="d-dark-mode-none mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-1-light.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <lottie-player
                  className="d-none d-dark-mode-block mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-1-dark.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <div className="card-body fs-lg fw-semibold text-center">
                  Light / Dark Mode
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide h-auto pb-3">
              <div className="card card-hover bg-light border-0 animation-on-hover h-100 mx-2">
                <lottie-player
                  className="d-dark-mode-none mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-2-light.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <lottie-player
                  className="d-none d-dark-mode-block mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-2-dark.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <div className="card-body fs-lg fw-semibold text-center">
                  Figma Files Included
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide h-auto pb-3">
              <div className="card card-hover bg-light border-0 animation-on-hover h-100 mx-2">
                <lottie-player
                  className="d-dark-mode-none mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-3-light.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <lottie-player
                  className="d-none d-dark-mode-block mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-3-dark.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <div className="card-body fs-lg fw-semibold text-center">
                  50+ UI Flexible Components
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide h-auto pb-3">
              <div className="card card-hover bg-light border-0 animation-on-hover h-100 mx-2">
                <lottie-player
                  className="d-dark-mode-none mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-4-light.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <lottie-player
                  className="d-none d-dark-mode-block mx-auto mt-4 mb-2"
                  src="assets/json/animation-feature-4-dark.json"
                  background="transparent.html"
                  speed="1.25"
                  loop
                  style={{ width: "180px" }}
                ></lottie-player>
                <div className="card-body fs-lg fw-semibold text-center">
                  Free Lifetime Updates
                </div>
              </div>
            </div>
          </div>

          {/* Pagination (bullets) */}
          <div className="swiper-pagination position-relative bottom-0 mt-2"></div>
        </div>
      </section>
    </div>
  );
};

export default MainFeaturesSwiper;
