import React from "react";

const MoneyFeaturesMobilev1 = () => (
    <div>
      <section className="container pt-5 pb-2 pb-md-3 py-lg-5">
        <div className="row align-items-center my-3 py-md-3 py-lg-5">
          <div className="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 order-md-2 mb-2 mb-md-0 pb-4 pb-md-0">
            <div
              className="position-relative mx-auto mx-md-0"
              style={{ maxWidth: "469px" }}
            >
              <img
                src="assets/img/landing/app-showcase/features/screen01.png"
                className="rellax d-block"
                alt="Screen"
                data-rellax-percentage="0.5"
                data-rellax-speed="-0.5"
                data-disable-parallax-down="md"
              />
              <div
                className="rellax position-absolute top-0 end-0 w-100 h-100"
                data-rellax-percentage="0.5"
                data-rellax-speed="0.75"
                data-disable-parallax-down="md"
              >
                <img
                  src="assets/img/landing/app-showcase/features/screen02.png"
                  alt="Screen"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1 pb-md-4">
            <h2 className="pb-3">Make your money transfer simple and clear</h2>
            <ul className="list-unstyled pb-3 mb-3">
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-check-circle fs-xl text-primary me-2" />
                Banking transactions are free for you
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-check-circle fs-xl text-primary me-2" />
                No monthly cash commission
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-check-circle fs-xl text-primary me-2" />
                Manage payments and transactions online
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              Learn more
              <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
            </a>
          </div>
        </div>
        <div className="row align-items-center mt-2 mt-md-0 pt-5 pt-md-4 pt-lg-0 pb-md-3 pb-lg-5">
          <div className="col-md-6 col-lg-5 offset-xl-1 mb-2 mb-md-0 pb-4 pb-md-0">
            <div
              className="position-relative mx-auto mx-md-0"
              style={{ maxWidth: "462px" }}
            >
              <img
                src="assets/img/landing/app-showcase/features/screen03.png"
                className="rellax d-block"
                alt="Screen"
                data-rellax-percentage="0.5"
                data-rellax-speed="-0.5"
                data-disable-parallax-down="md"
              />
              <div
                className="rellax position-absolute top-0 end-0 w-100 h-100 me-md-n3"
                data-rellax-percentage="0.5"
                data-rellax-speed="0.75"
                data-disable-parallax-down="md"
              >
                <img
                  src="assets/img/landing/app-showcase/features/screen04.png"
                  alt="Screen"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-lg-1">
            <h2 className="pb-3">
              Receive payment from international bank details
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 text-start pb-3">
              <div className="col pb-4">
                <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                  <img
                    src="assets/img/landing/app-showcase/features/payments.svg"
                    alt="Easy Payments"
                  />
                </div>
                <p className="mb-0">
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>
              <div className="col pb-4">
                <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                  <img
                    src="assets/img/landing/app-showcase/features/cashback.svg"
                    alt="Regular Cashback"
                  />
                </div>
                <p className="mb-0">
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <a href="#" className="btn btn-primary">
              Learn more
              <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1" />
            </a>
          </div>
        </div>
        {/* Extra spacing for dark mode only  */}
        <div className="pt-5 d-none d-dark-mode-block" />
      </section>
    </div>
  );

export default MoneyFeaturesMobilev1;
