import React from "react";
import ProtoTypes from "prop-types";

const TeamCard = ({ data }) => {
  // console.log(data);
  TeamCard.propTypes = {
    data: ProtoTypes.shape({
      imgSrc: ProtoTypes.string.isRequired,
      name: ProtoTypes.string.isRequired,
      designation: ProtoTypes.string.isRequired,
    }),
  };

  TeamCard.defaultProps = {
    data: {
      imgSrc: ProtoTypes.string.isRequired,
      name: ProtoTypes.string.isRequired,
      designation: ProtoTypes.string.isRequired,
    },
  };
  return (
    <div className="col">
      <div className="card card-hover border-0 bg-transparent">
        <div className="position-relative">
          <img src={data.imgSrc} className="rounded-3" alt={data.name} />
          <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3" />
            <div className="position-relative d-flex zindex-2">
              <a href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2">
                <i className="bx bxl-linkedin" />
              </a>
              <a href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white">
                <i className="bx bxl-twitter" />
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
