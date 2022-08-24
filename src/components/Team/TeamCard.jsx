import React from "react";

const TeamCard = ({ data }) => {
  console.log(data);
  return (
    <div className="col">
      <div className="card card-hover border-0 bg-transparent">
        <div className="position-relative">
          <img src={data.imgSrc} className="rounded-3" alt={data.name} />
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
          <h3 className="fs-lg fw-semibold pt-1 mb-2">{data.name}</h3>
          <p className="fs-sm mb-0">{data.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
