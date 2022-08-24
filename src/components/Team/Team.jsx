import React from "react";

const Team = () => {
  return (
    <div>
      <section className="container py-5 my-md-3 my-lg-5">
        <h2 className="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">
          Our Leadership
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Item  */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/01.jpg"
                  className="rounded-3"
                  alt="Jenny Wilson"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Jenny Wilson</h3>
                <p className="fs-sm mb-0">Co-Founder &amp; CEO</p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/02.jpg"
                  className="rounded-3"
                  alt="Ralph Edwards"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Ralph Edwards</h3>
                <p className="fs-sm mb-0">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/03.jpg"
                  className="rounded-3"
                  alt="Cameron Williamson"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-dribbble btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-dribbble"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">
                  Cameron Williamson
                </h3>
                <p className="fs-sm mb-0">Creative Director</p>
              </div>
            </div>
          </div>

          {/* Item  */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/04.jpg"
                  className="rounded-3"
                  alt="Jerome Bell"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Jerome Bell</h3>
                <p className="fs-sm mb-0">Marketing Director</p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/05.jpg"
                  className="rounded-3"
                  alt="Marvin McKinney"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-behance btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-behance"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-dribbble btn-sm bg-white"
                    >
                      <i className="bx bxl-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Marvin McKinney</h3>
                <p className="fs-sm mb-0">Lead Designer</p>
              </div>
            </div>
          </div>

          {/* Item  */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/06.jpg"
                  className="rounded-3"
                  alt="Esther Howard"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-dribbble btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-dribbble"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-behance btn-sm bg-white"
                    >
                      <i className="bx bxl-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Esther Howard</h3>
                <p className="fs-sm mb-0">Motion Designer</p>
              </div>
            </div>
          </div>

          {/* Item  */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/07.jpg"
                  className="rounded-3"
                  alt="Darrell Steward"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-stack-overflow btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-stack-overflow"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-github btn-sm bg-white"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Darrell Steward</h3>
                <p className="fs-sm mb-0">Lead Developer</p>
              </div>
            </div>
          </div>

          {/* Item  */}
          <div className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src="assets/img/team/08.jpg"
                  className="rounded-3"
                  alt="Jane Cooper"
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">Jane Cooper</h3>
                <p className="fs-sm mb-0">Senior Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
