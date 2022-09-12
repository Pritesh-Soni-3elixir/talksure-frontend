/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import ProtoTypes from "prop-types";

const CourseCard = ({ info }) => {
  CourseCard.propTypes = {
    info: ProtoTypes.shape({
      badge: ProtoTypes.string.isRequired,
      imgSrc: ProtoTypes.string.isRequired,
      name: ProtoTypes.string.isRequired,
      price: ProtoTypes.string.isRequired,
      duration: ProtoTypes.string.isRequired,
      instructor: ProtoTypes.string.isRequired,
      ratings: ProtoTypes.string.isRequired,
    }),
  };

  CourseCard.defaultProps = {
    info: {
      badge: ProtoTypes.string.isRequired,
      imgSrc: ProtoTypes.string.isRequired,
      name: ProtoTypes.string.isRequired,
      price: ProtoTypes.string.isRequired,
      duration: ProtoTypes.string.isRequired,
      instructor: ProtoTypes.string.isRequired,
      ratings: ProtoTypes.string.isRequired,
    },
  };
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
            />
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
              <i className="bx bx-bookmark" />
            </a>
            <img src={imgSrc} className="card-img-top" alt="card" />
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
              <i className="bx bx-time fs-xl me-1" />
              {duration} hours
            </div>
            <div className="d-flex align-items-center">
              <i className="bx bx-like fs-xl me-1" />
              {ratings}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CourseCard;
