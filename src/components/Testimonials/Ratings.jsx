import React from "react";

const Ratings = () => (
    <div>
      <section
        className="py-5 mb-md-2"
        style={{
          background:
            "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
        }}
      >
        <div className="container py-lg-4">
          <div className="row py-md-3">
            <div className="col-xl-3 col-lg-4 pt-2">
              <h2 className="h1 text-center text-lg-start pb-2">
                Clients are Loving Our App
              </h2>

              {/* Slider prev/next buttons  */}
              <div className="d-flex justify-content-center justify-content-lg-start pt-lg-5">
                <button
                  type="button"
                  id="prev-review"
                  className="btn btn-prev btn-icon btn-sm me-3"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="next-review"
                  className="btn btn-next btn-icon btn-sm"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
            <div className="col-lg-8 offset-xl-1 pt-4 mt-2 mt-md-3 mt-lg-0 pt-lg-0">
              <div className="px-2 px-sm-0">
                <div
                  className="swiper mx-n2"
                  data-swiper-options='{
                  "slidesPerView": 1,
                  "spaceBetween": 8,
                  "navigation": {
                    "prevEl": "#prev-review",
                    "nextEl": "#next-review"
                  },
                  "loop": true,
                  "breakpoints": {
                    "600": { "slidesPerView": 2 }
                  }
                }'
                >
                  <div className="swiper-wrapper">
                    {/* Item  */}
                    <div className="swiper-slide h-auto pt-4 pb-3 px-2">
                      <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                        <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                          <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                            <i className="bx bxs-quote-left" />
                          </span>
                          <blockquote className="card-body pb-4 mb-0">
                            <div className="text-nowrap pt-1 mb-3">
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bx-star text-muted opacity-75" />
                              <i className="bx bx-star text-muted opacity-75" />
                            </div>
                            <p className="fs-lg mb-0">
                              Sit pretium aliquam tempor, orci dolor sed
                              maecenas rutrum sagittis. Laoreet posuere rhoncus,
                              egestas lacus, egestas justo aliquam vel. Nisi
                              vitae lectus hac hendrerit. Montes justo turpis
                              sit amet.
                            </p>
                          </blockquote>
                          <div className="card-footer d-flex align-items-center border-0 pt-0">
                            <img
                              src="assets/img/avatar/42.png"
                              width="48"
                              className="rounded-circle ms-n1"
                              alt="Fannie Summers"
                            />
                            <div className="ps-2 ms-1">
                              <h6 className="fs-base fw-semibold mb-0">
                                Fannie Summers
                              </h6>
                              <span className="fs-sm text-muted">Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item  */}
                    <div className="swiper-slide h-auto pb-3 px-2 pt-4">
                      <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                        <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                          <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                            <i className="bx bxs-quote-left" />
                          </span>
                          <blockquote className="card-body pb-4 mb-0">
                            <div className="text-nowrap pt-1 mb-3">
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                            </div>
                            <p className="fs-lg mb-0">
                              Nunc senectus leo vel venenatis accumsan
                              vestibulum sollicitudin amet porttitor. Nisl
                              bibendum nulla tincidunt eu enim ornare dictumst
                              sit amet. Dictum pretium dolor tincidunt egestas
                              eget nunc.
                            </p>
                          </blockquote>
                          <div className="card-footer d-flex align-items-center border-0 pt-0">
                            <img
                              src="assets/img/avatar/43.png"
                              width="48"
                              className="rounded-circle ms-n1"
                              alt="Robert Fox"
                            />
                            <div className="ps-2 ms-1">
                              <h6 className="fs-base fw-semibold mb-0">
                                Robert Fox
                              </h6>
                              <span className="fs-sm text-muted">
                                QA Engineer
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item  */}
                    <div className="swiper-slide h-auto pb-3 px-2 pt-4">
                      <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                        <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                          <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                            <i className="bx bxs-quote-left" />
                          </span>
                          <blockquote className="card-body pb-4 mb-0">
                            <div className="text-nowrap pt-1 mb-3">
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bx-star text-muted opacity-75" />
                            </div>
                            <p className="fs-lg mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris ipsum odio, bibendum ornare mi at,
                              efficitur urna. Sit pretium aliquam tempor, orci
                              dolor sed maecenas.
                            </p>
                          </blockquote>
                          <div className="card-footer d-flex align-items-center border-0 pt-0">
                            <img
                              src="assets/img/avatar/44.png"
                              width="48"
                              className="rounded-circle ms-n1"
                              alt="Annette Black"
                            />
                            <div className="ps-2 ms-1">
                              <h6 className="fs-base fw-semibold mb-0">
                                Annette Black
                              </h6>
                              <span className="fs-sm text-muted">
                                Project Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item  */}
                    <div className="swiper-slide h-auto pb-3 px-2 pt-4">
                      <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                        <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                          <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                            <i className="bx bxs-quote-left" />
                          </span>
                          <blockquote className="card-body pb-4 mb-0">
                            <div className="text-nowrap pt-1 mb-3">
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                              <i className="bx bxs-star text-warning" />
                            </div>
                            <p className="fs-lg mb-0">
                              Etiam augue ante, imperdiet et nunc sed, bibendum
                              faucibus est. Suspendisse egestas facilisis erat
                              eu eleifend. Pellentesque finibus congue egestas
                              egestas suspendisse blandit justo.
                            </p>
                          </blockquote>
                          <div className="card-footer d-flex align-items-center border-0 pt-0">
                            <img
                              src="assets/img/avatar/45.png"
                              width="48"
                              className="rounded-circle ms-n1"
                              alt="Jerome Bell"
                            />
                            <div className="ps-2 ms-1">
                              <h6 className="fs-base fw-semibold mb-0">
                                Jerome Bell
                              </h6>
                              <span className="fs-sm text-muted">
                                Developer
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default Ratings;
