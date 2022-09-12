import React from "react";

const HowItWorksSlider = () => (
    <div>
      <section className="position-relative bg-secondary py-5">
        <div className="container mt-3 pt-md-2 pt-lg-4 pb-2 pb-md-4 pb-lg-5">
          <h2 className="h1 text-center pb-2 pb-md-0 mb-4 mb-md-5">
            How Does It Work?
          </h2>
          <div className="position-relative mx-5">
            {/* Slider prev/next buttons  */}
            <button
              type="button"
              id="prev-screen"
              className="btn btn-prev btn-icon position-absolute top-50 start-0 ms-n5 translate-middle-y"
            >
              <i className="bx bx-chevron-left" />
            </button>
            <button
              type="button"
              id="next-screen"
              className="btn btn-next btn-icon position-absolute top-50 end-0 me-n5 translate-middle-y"
            >
              <i className="bx bx-chevron-right" />
            </button>

            {/* Phone frame  */}
            <div className="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33 zindex-5">
              <div
                className="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
                style={{
                  maxWidth: "328px",
                  backgroundImage:
                    "url(assets/img/landing/app-showcase/screens/phone-frame.png)",
                }}
               />
            </div>

            {/* Phone screen  */}
            <div className="position-absolute top-0 start-50 translate-middle-x h-100 w-100 w-md-33">
              <div
                className="d-flex bg-repeat-0 bg-size-cover w-100 h-100 mx-auto"
                style={{
                  maxWidth: "328px",
                  backgroundImage:
                    "url(assets/img/landing/app-showcase/screens/phone-screen.png)",
                }}
               />
            </div>

            {/* Swiper slider  */}
            <div
              className="swiper mobile-app-slider"
              data-swiper-options='{
              "slidesPerView": 1,
              "centeredSlides": true,
              "loop": true,
              "tabs": true,
              "pagination": {
                "el": "#swiper-progress",
                "type": "progressbar"
              },
              "navigation": {
                "prevEl": "#prev-screen",
                "nextEl": "#next-screen"
              },
              "breakpoints": {
                "768": { "slidesPerView": 3 }
              }
            }'
            >
              <div className="swiper-wrapper">
                Item
                <div className="swiper-slide" data-swiper-tab="#text-1">
                  <img
                    src="assets/img/landing/app-showcase/screens/01.png"
                    className="d-block mx-auto"
                    width="328"
                    alt="Screen"
                  />
                </div>
                {/* Item  */}
                <div className="swiper-slide" data-swiper-tab="#text-2">
                  <img
                    src="assets/img/landing/app-showcase/screens/02.png"
                    className="d-block mx-auto"
                    width="328"
                    alt="Screen"
                  />
                </div>
                {/* Item  */}
                <div className="swiper-slide" data-swiper-tab="#text-3">
                  <img
                    src="assets/img/landing/app-showcase/screens/03.png"
                    className="d-block mx-auto"
                    width="328"
                    alt="Screen"
                  />
                </div>
                {/* Item  */}
                <div className="swiper-slide" data-swiper-tab="#text-4">
                  <img
                    src="assets/img/landing/app-showcase/screens/04.png"
                    className="d-block mx-auto"
                    width="328"
                    alt="Screen"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Swiper tabs (Description text)  */}
          <div className="row justify-content-center pt-4 mt-2 mt-md-3">
            <div className="swiper-tabs col-xl-6 col-lg-7 col-md-8 text-center">
              {/* Text 1  */}
              <div id="text-1" className="swiper-tab active">
                <h3 className="h4 pb-1 mb-2">
                  Step 1. Advanced budget management
                </h3>
                <p className="mb-0">
                  Consequat ut cras nisl, enim purus in facilisi. Ipsum amet,
                  lectus malesuada risus sollicitudin accumsan. Id sem elit vel
                  vel lectus risus senectus.
                </p>
              </div>

              {/* Text 2  */}
              <div id="text-2" className="swiper-tab">
                <h3 className="h4 pb-1 mb-2">
                  Step 2. Latest transaction history
                </h3>
                <p className="mb-0">
                  Enim, et amet praesent pharetra. Mi non ante hendrerit amet
                  sed. Arcu sociis tristique quisque hac in consectetur
                  condimentum.
                </p>
              </div>

              {/* Text 3  */}
              <div id="text-3" className="swiper-tab">
                <h3 className="h4 pb-1 mb-2">
                  Step 3. Transfers to people from your contact list
                </h3>
                <p className="mb-0">
                  Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                  Pellentesque volutpat ligula est. Mattis fermentum, at nec
                  lacus.
                </p>
              </div>

              {/* Text 4  */}
              <div id="text-4" className="swiper-tab">
                <h3 className="h4 pb-1 mb-2">Step 4. Card-to-card transfers</h3>
                <p className="mb-0">
                  A sed lorem felis, pulvinar pharetra. At tempus, vel sed
                  faucibus amet sit elementum sed erat. Id nunc blandit pharetra
                  facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slider progress  */}
        <div
          id="swiper-progress"
          className="swiper-pagination bottom-0"
          style={{ top: "auto" }}
         />
      </section>
    </div>
  );

export default HowItWorksSlider;
