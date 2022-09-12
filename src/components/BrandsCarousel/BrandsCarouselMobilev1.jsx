import React from "react";

const BrandsCarouselMobilev1 = () => (
    <div>
      <section className="container py-5 mt-md-2 mt-lg-4">
        <div
          className="swiper pt-2 mx-n2"
          data-swiper-options='{
          "slidesPerView": 2,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 3,
              "spaceBetween": 8
            },
            "650": {
              "slidesPerView": 4,
              "spaceBetween": 8
            },
            "900": {
              "slidesPerView": 5,
              "spaceBetween": 8
            },
            "1100": {
              "slidesPerView": 6,
              "spaceBetween": 8
            }
          }
        }'
        >
          <div className="swiper-wrapper">
            {/* Item  */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/01.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* Item  */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/02.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* Item  */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/03.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* Item  */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/04.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* Item  */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/05.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>

            {/* Item  */}
            <div className="swiper-slide py-3">
              <a href="#" className="card card-body card-hover px-2 mx-2">
                <img
                  src="assets/img/brands/06.svg"
                  className="d-block mx-auto my-2"
                  width="154"
                  alt="Brand"
                />
              </a>
            </div>
          </div>

          {/* Pagination (bullets) */}
          <div className="swiper-pagination position-relative pt-2 mt-4" />
        </div>
      </section>
    </div>
  );

export default BrandsCarouselMobilev1;
