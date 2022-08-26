import React from "react";

const CourseCard = ({ info }) => {
  //   switch (key) {
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  const { badge, name, imgSrc, price, duration, instructor, ratings } = {
    ...info,
  };

  return (
    <div>
      <div className="col pb-1 pb-lg-3 mb-4">
        <article className="card h-100 border-0 shadow-sm">
          <div className="position-relative">
            <a
              href="portfolio-single-course.html"
              className="d-block position-absolute w-100 h-100 top-0 start-0"
            ></a>
            <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">
              {badge}
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
            <img src={imgSrc} className="card-img-top" alt="Image" />
          </div>
          <div className="card-body pb-3">
            <h3 className="h5 mb-2">
              <a href="portfolio-single-course.html">{name}</a>
            </h3>
            <p className="fs-sm mb-2">By {instructor}</p>
            <p className="fs-lg fw-semibold text-primary mb-0">${price}</p>
          </div>
          <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
            <div className="d-flex align-items-center me-4">
              <i className="bx bx-time fs-xl me-1"></i>
              {duration} hours
            </div>
            <div className="d-flex align-items-center">
              <i className="bx bx-like fs-xl me-1"></i>
              {ratings}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CourseCard;
