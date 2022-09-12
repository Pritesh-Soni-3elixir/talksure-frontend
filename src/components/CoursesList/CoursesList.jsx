import React from "react";
import CourseCard from "./CourseCard";
import { categories , courseDetails } from "../../data/courseData";


const CoursesList = () => (
    <div>
      {/* Page title + Filters */}
      <div className="d-lg-flex align-items-center justify-content-between py-4 mt-lg-2">
        <h1 className="me-3">Courses</h1>
        <div className="d-md-flex mb-3">
          <select
            className="form-select me-md-4 mb-2 mb-md-0"
            style={{ minWidth: "240px" }}
          >
            {categories.map((category) => <option value={category}>{category}</option>)}
          </select>
          <div className="position-relative" style={{ minWidth: "300px" }}>
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search courses"
            />
            <i className="bx bx-search text-nav fs-lg position-absolute top-50 end-0 translate-middle-y me-3" />
          </div>
        </div>
      </div>
      {/* Course Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-3 gx-md-4 mt-n2 mt-sm-0">
        {courseDetails.map((courseInfo) => <CourseCard info={courseInfo} />)}
      </div>
      {/* Pagination: Basic example */}
      <nav className="pb-5" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a href="#" className="page-link">
              <i className="bx bx-chevron-left ms-n1 me-1" />
              Prev
            </a>
          </li>
          <li className="page-item disabled d-sm-none">
            <span className="page-link text-body">1 / 4</span>
          </li>
          <li
            className="page-item active d-none d-sm-block"
            aria-current="page"
          >
            <span className="page-link">
              1<span className="visually-hidden">(current)</span>
            </span>
          </li>
          <li className="page-item d-none d-sm-block">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item d-none d-sm-block">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item d-none d-sm-block">
            <a href="#" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              Next
              <i className="bx bx-chevron-right me-n1 ms-1" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

export default CoursesList;
