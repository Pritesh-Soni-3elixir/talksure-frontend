import React from "react";

const BenefitsAbout = () => {
  return (
    <div>
      <section class="container mt-3 mb-5 pt-lg-5" id="benefits">
        <div
          class="swiper pt-3"
          data-swiper-options='{
          "slidesPerView": 1,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 2
            },
            "991": {
              "slidesPerView": 3
            }
          }
        }'
        >
          <div class="swiper-wrapper pt-4">
            {/* Item  */}
            <div class="swiper-slide border-end-lg px-2">
              <div class="text-center">
                <img
                  src="assets/img/landing/digital-agency/icons/idea.svg"
                  width="48"
                  alt="Bulb icon"
                  class="d-block mb-4 mx-auto"
                />
                <h4 class="mb-2 pb-1">Creative Solutions</h4>
                <p class="mx-auto" style={{ maxWidth: "336px" }}>
                  Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.
                </p>
              </div>
            </div>

            {/* Item  */}
            <div class="swiper-slide border-end-lg px-2">
              <div class="text-center">
                <img
                  src="assets/img/landing/digital-agency/icons/award.svg"
                  width="48"
                  alt="Award icon"
                  class="d-block mb-4 mx-auto"
                />
                <h4 class="mb-2 pb-1">Award Winning</h4>
                <p class="mx-auto" style={{ maxWidth: "336px" }}>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet.
                </p>
              </div>
            </div>

            {/* Item  */}
            <div class="swiper-slide px-2">
              <div class="text-center">
                <img
                  src="assets/img/landing/digital-agency/icons/team.svg"
                  width="48"
                  alt="Team icon"
                  class="d-block mb-4 mx-auto"
                />
                <h4 class="mb-2 pb-1">Team of Professionals</h4>
                <p class="mx-auto" style={{ maxWidth: "336px" }}>
                  Nam venenatis urna aenean quis feugiat et senectus turpis.
                </p>
              </div>
            </div>
          </div>

          {/* Pagination (bullets)  */}
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsAbout;
