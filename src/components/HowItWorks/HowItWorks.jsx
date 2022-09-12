import React from "react";

const HowItWorks = () => (
    <div>
      <section className="container">
        <div
          className="text-center pb-4 mb-3 mx-auto"
          style={{ maxWidth: "530px" }}
        >
          <h2 className="h1">How Does It Work?</h2>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat
            mollis egestas nam luctus facilisis ultrices
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 pb-4 pb-md-0 mb-2 mb-md-0">
            {/* Swiper tabs  */}
            <div className="position-relative px-5">
              <div
                className="swiper-tabs zindex-2 mx-auto"
                style={{ maxWidth: "384px" }}
              >
                <div id="screen-1" className="swiper-tab active">
                  <img
                    src="assets/img/landing/app-showcase/screens/05.png"
                    alt="App screen"
                  />
                </div>
                <div id="screen-2" className="swiper-tab">
                  <img
                    src="assets/img/landing/app-showcase/screens/06.png"
                    alt="App screen"
                  />
                </div>
                <div id="screen-3" className="swiper-tab">
                  <img
                    src="assets/img/landing/app-showcase/screens/07.png"
                    alt="App screen"
                  />
                </div>
              </div>
              <div
                className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3"
                style={{ height: "86.5%" }}
               />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1">
            <div className="ps-md-4 ps-lg-0">
              {/* Swiper slider  */}
              <div
                className="swiper text-center text-md-start mt-auto"
                data-swiper-options='{
                "spaceBetween": 30,
                "loop": true,
                "tabs": true,
                "navigation": {
                  "prevEl": "#prev-screen",
                  "nextEl": "#next-screen"
                }
              }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide" data-swiper-tab="#screen-1">
                    <div className="fs-xl text-muted mb-3 mb-lg-4">step 1</div>
                    <h3 className="mb-lg-4">Create your account</h3>
                    <p>
                      Tellus est ullamcorper diam phasellus. Commodo acine
                      pharetra quam lacinia fames quam nibh in elementum
                      pulvinar consectetur adipiscing. Et viverra maecenas quis
                      cras sed gravida volutpat, cursus enim enim ut nulla netus
                      porta lacus.
                    </p>
                  </div>
                  <div className="swiper-slide" data-swiper-tab="#screen-2">
                    <div className="fs-xl text-muted mb-3 mb-lg-4">step 2</div>
                    <h3 className="mb-lg-4">Set up payment details</h3>
                    <p>
                      Ac condimentum a nisl sagittis, interdum. Et viverra
                      maecenas quis cras sed gravida volutpat, cursus enim. Enim
                      ut nulla netus porta lacus diam. Risus massa fames metus
                      lectus diam maecenas dui. Nibh morbi id purus eget tellus
                      diam.
                    </p>
                  </div>
                  <div className="swiper-slide" data-swiper-tab="#screen-3">
                    <div className="fs-xl text-muted mb-3 mb-lg-4">step 3</div>
                    <h3 className="mb-lg-4">Start trading</h3>
                    <p>
                      Risus massa fames metus lectus diam maecenas dui. Nibh
                      morbi id purus eget tellus diam, integer blandit. Ac
                      condimentum a nisl sagittis, interdum. Et viverra maecenas
                      quis cras sed gravida volutpat, cursus enim. Enim ut nulla
                      netus porta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider controls (Prev / next) */}
              <div className="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
                <button
                  type="button"
                  id="prev-screen"
                  className="btn btn-prev btn-icon btn-sm me-2"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="next-screen"
                  className="btn btn-next btn-icon btn-sm ms-2"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default HowItWorks;
