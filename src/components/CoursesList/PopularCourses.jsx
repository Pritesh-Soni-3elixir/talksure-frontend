import React from "react";
import { categories, courseDetails } from "../../data/courseData";

const PopularCourses = () => {
  const categoriesNames = categories.slice(1);
  return (
    <div>
      <section className="container mt-2 mt-sm-3 py-md-3 py-lg-5">
        <div className="row py-5">
          <div className="col-lg-3 col-md-4">
            {/* Nav tabs  */}
            <ul
              className="nav nav-tabs flex-nowrap overflow-auto flex-md-column pb-2 pb-md-0 mb-3 mb-md-5"
              role="tablist"
            >
              {categoriesNames.map((categoryName) => {
                return (
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link d-inline-block text-nowrap "
                      role="tab"
                      aria-selected="true"
                    >
                      {categoryName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="portfolio-courses.html"
              className="btn btn-outline-primary btn-lg d-none d-md-inline-flex"
            >
              See all courses
              <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
            </a>
          </div>

          {/* Main section */}
          <div className="col-lg-9 col-md-8">
            {/* Title + prev/next buttons  */}
            <div className="d-flex align-items-center justify-content-between pb-4 mb-3">
              <h2 className="h1 mb-0 me-3">Popular Courses</h2>
              <div className="d-flex">
                <button
                  type="button"
                  id="popular-prev"
                  className="btn btn-prev btn-icon btn-sm me-2"
                >
                  <i className="bx bx-chevron-left"></i>
                </button>
                <button
                  type="button"
                  id="popular-next"
                  className="btn btn-next btn-icon btn-sm ms-2"
                >
                  <i className="bx bx-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Courses slider  */}
            <div
              className="swiper swiper-nav-onhover mx-n2"
              data-swiper-options='{
              "slidesPerView": 1,
              "spaceBetween": 8,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "navigation": {
                "prevEl": "#popular-prev",
                "nextEl": "#popular-next"
              },
              "breakpoints": {
                "560": {
                  "slidesPerView": 2
                },
                "768": {
                  "slidesPerView": 1
                },
                "850": {
                  "slidesPerView": 2
                },
                "1200": {
                  "slidesPerView": 3
                }
              }
            }'
            >
              <div className="swiper-wrapper">
                {/* Item  */}
                {courseDetails.map((course) => {
                  return (
                    <div className="swiper-slide h-auto pb-3">
                      <article className="card h-100 border-0 shadow-sm mx-2">
                        <div className="position-relative">
                          <a
                            href="portfolio-single-course.html"
                            className="d-block position-absolute w-100 h-100 top-0 start-0"
                          ></a>
                          <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">
                            {course.badge}
                          </span>
                          <a
                            href="#"
                            className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Save to Favorites"
                          >
                            <i className="bx bx-bookmark"></i>
                          </a>
                          <img
                            src={course.imgSrc}
                            className="card-img-top"
                            alt="Image"
                          />
                        </div>
                        <div className="card-body pb-3">
                          <h3 className="h5 mb-2">
                            <a href="portfolio-single-course.html">
                              {course.name}
                            </a>
                          </h3>
                          <p className="fs-sm mb-2">By {course.instructor}</p>
                          <p className="fs-lg fw-semibold text-primary mb-0">
                            ${course.price}
                          </p>
                        </div>
                        <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                          <div className="d-flex align-items-center me-4">
                            <i className="bx bx-time fs-xl me-1"></i>
                            {course.duration} hours
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="bx bx-like fs-xl me-1"></i>
                            {course.ratings}
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>

              {/* Pagination (bullets)  */}
              <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
            </div>
            <a
              href="portfolio-courses.html"
              className="btn btn-outline-primary btn-lg w-100 d-md-none mt-3"
            >
              See all courses
              <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCourses;
