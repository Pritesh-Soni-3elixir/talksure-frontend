import React from "react";

const Testimonials = () => (
    <div>
      <section className="container py-5 my-1 my-md-4 my-lg-5">
        <div className="row pt-2 py-xl-3">
          <div className="col-lg-3 col-md-4">
            <h2
              className="h1 text-center text-md-start mx-auto mx-md-0 pb-3 pb-sm-4 pb-md-0 pt-md-2"
              style={{ maxWidth: "300px" }}
            >
              What <br className="d-none d-md-inline" />
              People Say <br className="d-none d-md-inline" />
              About App:
            </h2>

            {/* Slider controls (Prev / next buttons) */}
            <div className="d-none d-md-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
              <button
                type="button"
                id="prev-testimonial"
                className="btn btn-prev btn-icon btn-sm me-2"
              >
                <i className="bx bx-chevron-left" />
              </button>
              <button
                type="button"
                id="next-testimonial"
                className="btn btn-next btn-icon btn-sm ms-2"
              >
                <i className="bx bx-chevron-right" />
              </button>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div
              className="swiper mx-n2"
              data-swiper-options='{
              "slidesPerView": 1,
              "spaceBetween": 8,
              "loop": true,
              "navigation": {
                "prevEl": "#prev-testimonial",
                "nextEl": "#next-testimonial"
              },
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },    
              "breakpoints": {
                "500": {
                  "slidesPerView": 2
                },
                "1000": {
                  "slidesPerView": 2
                },
                "1200": {
                  "slidesPerView": 3
                }
              }
            }'
            >
              <div className="swiper-wrapper">
                {/* Item */}
                <div className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left" />
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">
                          Id mollis consectetur congue egestas egestas
                          suspendisse blandit justo. Tellus augue commodo id
                          quis tempus etiam pulvinar at maecenas.
                        </p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bx-star text-muted opacity-75" />
                        <i className="bx bx-star text-muted opacity-75" />
                      </div>
                    </div>
                    <figcaption className="ps-4 pt-4">
                      <h6 className="fs-sm fw-semibold mb-0">Robert Fox</h6>
                      <span className="fs-xs text-muted">
                        Founder of Lorem Company
                      </span>
                    </figcaption>
                  </figure>
                </div>

                {/* Item */}
                <div className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left" />
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">
                          Phasellus luctus nisi id orci condimentum, at cursus
                          nisl vestibulum. Orci varius natoque penatibus et
                          magnis dis parturient montes commodo.
                        </p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                      </div>
                    </div>
                    <figcaption className="ps-4 pt-4">
                      <h6 className="fs-sm fw-semibold mb-0">Annette Black</h6>
                      <span className="fs-xs text-muted">
                        CEO of Ipsum Company
                      </span>
                    </figcaption>
                  </figure>
                </div>

                {/* Item  */}
                <div className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left" />
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris ipsum odio, bibendum ornare mi at,
                          efficitur urna.
                        </p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bx-star text-muted opacity-75" />
                      </div>
                    </div>
                    <figcaption className="ps-4 pt-4">
                      <h6 className="fs-sm fw-semibold mb-0">Jerome Bell</h6>
                      <span className="fs-xs text-muted">
                        Founder of the Agency{" "}
                      </span>
                    </figcaption>
                  </figure>
                </div>

                {/* Item */}
                <div className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left" />
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">
                          Pellentesque finibus congue egestas egestas
                          suspendisse blandit justo. Tellus augue commodo id
                          quis tempus etiam pulvinar at maecenas.
                        </p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                      </div>
                    </div>
                    <figcaption className="ps-4 pt-4">
                      <h6 className="fs-sm fw-semibold mb-0">Albert Flores</h6>
                      <span className="fs-xs text-muted">
                        CEO of Dolor Ltd.
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pagination (bullets)  */}
              <div className="swiper-pagination position-relative d-md-none mt-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default Testimonials;
