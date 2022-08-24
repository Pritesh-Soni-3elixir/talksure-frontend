import React from "react";

const HeroContact = () => {
  return (
    <div>
      <section
        className="dark-mode position-relative pt-5"
        style={{ backgroundColor: "#151922" }}
      >
        {/* Content */}
        <div className="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
          {/* Breadcrumb */}
          <nav className="pt-lg-4" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index-2.html">
                  <i className="bx bx-home-alt fs-lg me-1"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts v.1
              </li>
            </ol>
          </nav>

          <div className="row justify-content-center pt-3 mt-3">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
              <h1 className="mb-4">Get in Touch</h1>
              <p className="fs-lg pb-3 mb-3">
                Have a project in mind? To request a quote contact us directly
                or fill out the form and let us know how we can help.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-facebook rounded-circle mx-2"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-instagram rounded-circle mx-2"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-google rounded-circle mx-2"
                >
                  <i className="bx bxl-google"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-secondary btn-twitter rounded-circle mx-2"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom shape */}
        <div
          className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5"
          style={{ color: "#151922" }}
        >
          <div
            className="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1"
            style={{ width: "3788px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3788"
              height="144"
              viewBox="0 0 3788 144"
            >
              <path
                fill="currentColor"
                d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContact;
