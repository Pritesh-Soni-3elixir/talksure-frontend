import React from "react";

const AppFeatures = () => {
  return (
    <div>
      <section
        id="features"
        className="container pt-lg-2 pt-xl-3 pb-3 pb-xl-5 mt-n2 mt-sm-0 mb-2 mb-md-4 mb-lg-5"
      >
        <div className="row pb-xl-3">
          {/* Parallax gfx  */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="position-relative" style={{ maxWidth: "348px" }}>
              <img
                src="assets/img/landing/app-showcase/features/phone.png"
                alt="Phone"
              />
              <div
                className="rellax position-absolute top-0"
                data-rellax-vertical-scroll-axis="x"
                data-rellax-horizontal-speed="0.75"
                data-disable-parallax-down="lg"
                style={{ maxWidth: "348px", right: "-2.75rem" }}
              >
                <img
                  src="assets/img/landing/app-showcase/features/card.png"
                  alt="Card"
                />
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="col-lg-7">
            <h2 className="h1 text-center text-md-start mb-4">App Features</h2>
            <p className="fs-lg text-muted text-center text-md-start mb-4 mb-xl-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            <div className="row row-cols-1 row-cols-sm-2 pt-2 pt-sm-3 pt-xl-2">
              {/* Item  */}
              <div className="col pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start pe-xl-3">
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img
                      src="assets/img/landing/app-showcase/features/payments.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">Easy Payments</h3>
                    <p className="mb-0">
                      Id mollis consectetur congue egestas egestas suspendisse
                      blandit justo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item  */}
              <div className="col pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start ps-xl-3">
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img
                      src="assets/img/landing/app-showcase/features/security.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">Data Security</h3>
                    <p className="mb-0">
                      Augue pulvinar justo, fermentum fames aliquam accumsan
                      vestibulum non.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item  */}
              <div className="col pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start pe-xl-3">
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img
                      src="assets/img/landing/app-showcase/features/statistics.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">Cost Statistics</h3>
                    <p className="mb-0">
                      Mattis urna ultricies non amet, purus in auctor non. Odio
                      vulputate ac nibh.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item  */}
              <div className="col pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start ps-xl-3">
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img
                      src="assets/img/landing/app-showcase/features/support.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">Support 24/7</h3>
                    <p className="mb-0">
                      A elementum, imperdiet enim, pretium etiam facilisi in
                      aenean quam mauris.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item  */}
              <div className="col pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start pe-xl-3">
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img
                      src="assets/img/landing/app-showcase/features/cashback.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">Regular Cashback</h3>
                    <p className="mb-0">
                      Sit facilisis dolor arcu, fermentum vestibulum arcu
                      elementum imperdiet eleifend.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item  */}
              <div className="col pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start ps-xl-3">
                  <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img
                      src="assets/img/landing/app-showcase/features/happy.svg"
                      alt="Icon"
                    />
                  </div>
                  <div className="ps-4 ps-sm-3 ps-md-4">
                    <h3 className="h5 pb-1 mb-2">Top Standards</h3>
                    <p className="mb-0">
                      Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                      risus id. Sit facilisis dolor arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppFeatures;
