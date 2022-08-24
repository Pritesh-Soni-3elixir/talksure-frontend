import React from "react";

const SocialNetworkCarousel = () => {
  return (
    <div>
      <section className="container text-center py-5 my-2 my-md-4 my-lg-5">
        <h2 className="h1 mb-4">We Have Social Networks</h2>
        <p className="fs-lg text-muted pb-2 mb-5">
          Follow us and keep up to date with the freshest news!
        </p>
        <div
          className="swiper"
          data-swiper-options='{
          "slidesPerView": 2,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 3
            },
            "650": {
              "slidesPerView": 4
            },
            "900": {
              "slidesPerView": 5
            },
            "1100": {
              "slidesPerView": 6
            }
          }
        }'
        >
          <div className="swiper-wrapper">
            {/* Item */}
            <div className="swiper-slide">
              <div className="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <div className="pt-4">
                  <h6 className="mb-1">Facebook</h6>
                  <p className="fs-sm text-muted mb-0">silicon</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide">
              <div className="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-instagram btn-lg stretched-link"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <div className="pt-4">
                  <h6 className="mb-1">Instagram</h6>
                  <p className="fs-sm text-muted mb-0">@silicon</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide">
              <div className="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-twitter btn-lg stretched-link"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <div className="pt-4">
                  <h6 className="mb-1">Twitter</h6>
                  <p className="fs-sm text-muted mb-0">@silicon</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide">
              <div className="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-linkedin btn-lg stretched-link"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <div className="pt-4">
                  <h6 className="mb-1">LinkedIn</h6>
                  <p className="fs-sm text-muted mb-0">Silicon Inc.</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="swiper-slide">
              <div className="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
                <div className="pt-4">
                  <h6 className="mb-1">YouTube</h6>
                  <p className="fs-sm text-muted mb-0">Silicon</p>
                </div>
              </div>
            </div>

            {/* Item  */}
            <div className="swiper-slide">
              <div className="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-dribbble btn-lg stretched-link"
                >
                  <i className="bx bxl-dribbble"></i>
                </a>
                <div className="pt-4">
                  <h6 className="mb-1">Dribbble</h6>
                  <p className="fs-sm text-muted mb-0">Silicon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination (bullets)  */}
          <div className="swiper-pagination position-relative bottom-0 pt-3 mt-4"></div>
        </div>
      </section>
    </div>
  );
};

export default SocialNetworkCarousel;
