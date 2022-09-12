import React from "react";

const StatsMobilev2 = () => (
    <div>
      <section className="dark-mode bg-dark position-relative pt-5 pb-4 py-md-5">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary" />
        <div className="container position-relative zindex-3 py-lg-4 pt-md-2 py-xl-5 mb-lg-4">
          {/* Title */}
          <div className="row justify-content-center text-center pb-4 mb-2">
            <div className="col-xl-6 pt-2">
              <h2 className="h1 mb-4">Buy crypto at true cost</h2>
              <p className="fs-lg mb-0">
                Egestas ullamcorper posuere tortor eget netus elementum dui eu
                cras eros accumsan, ullamcorper tortor gula dui in netus
              </p>
            </div>
          </div>

          {/* Table  */}
          <div className="d-sm-flex flex-wrap d-lg-table w-100">
            {/* Row  */}
            <div className="d-lg-table-row w-sm-50 w-lg-100 pe-sm-3 pe-lg-0 mb-3 mb-lg-0">
              <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/landing/app-showcase/crypto/btc.png"
                    width="32"
                    alt="Bitcoin"
                  />
                  <div className="ps-3">
                    <h3 className="h4 mb-0">
                      Bitcoin
                      <span className="d-inlin-block opacity-60 ps-2 ms-1">
                        BTC
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">
                $38,940.63
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-success border-bottom py-3 py-lg-4">
                +1.70%
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-white border-bottom py-3 py-lg-4">
                $736,124,602,670.97
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
                <img
                  src="assets/img/landing/app-showcase/crypto/graphs/btc.svg"
                  width="108"
                  alt="BTC graph"
                />
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary fs-sm w-100 w-lg-auto"
                >
                  Trade
                </button>
              </div>
            </div>

            {/* Row  */}
            <div className="d-lg-table-row w-sm-50 w-lg-100 ps-sm-3 ps-lg-0 mb-3 mb-lg-0">
              <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/landing/app-showcase/crypto/usdt.png"
                    width="32"
                    alt="Tether"
                  />
                  <div className="ps-3">
                    <h3 className="h4 mb-0">
                      Tether
                      <span className="d-inlin-block opacity-60 ps-2 ms-1">
                        USDT
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">
                $15.09
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-danger border-bottom py-3 py-lg-4">
                -0.27%
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-white border-bottom py-3 py-lg-4">
                $14,735,584,883.68
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
                <img
                  src="assets/img/landing/app-showcase/crypto/graphs/usdt.svg"
                  width="108"
                  alt="USDT graph"
                />
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary fs-sm w-100 w-lg-auto"
                >
                  Trade
                </button>
              </div>
            </div>

            {/* Row  */}
            <div className="d-lg-table-row w-sm-50 w-lg-100 pe-sm-3 pe-lg-0 mb-3 mb-lg-0">
              <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/landing/app-showcase/crypto/eth.png"
                    width="32"
                    alt="Ethereum"
                  />
                  <div className="ps-3">
                    <h3 className="h4 mb-0">
                      Ethereum
                      <span className="d-inlin-block opacity-60 ps-2 ms-1">
                        ETH
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">
                $2,829.07
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-success border-bottom py-3 py-lg-4">
                +1.27%
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-white border-bottom py-3 py-lg-4">
                $337,863,906,048.53
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
                <img
                  src="assets/img/landing/app-showcase/crypto/graphs/eth.svg"
                  width="108"
                  alt="ETH graph"
                />
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary fs-sm w-100 w-lg-auto"
                >
                  Trade
                </button>
              </div>
            </div>

            {/* Row  */}
            <div className="d-lg-table-row w-sm-50 w-lg-100 ps-sm-3 ps-lg-0 mb-3 mb-lg-0">
              <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/landing/app-showcase/crypto/dot.png"
                    width="32"
                    alt="Polkadot"
                  />
                  <div className="ps-3">
                    <h3 className="h4 mb-0">
                      Polkadot
                      <span className="d-inlin-block opacity-60 ps-2 ms-1">
                        DOT
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">
                $13.28
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-danger border-bottom py-3 py-lg-4">
                -1.35%
              </div>
              <div className="d-lg-table-cell align-middle fs-lg text-white border-bottom py-3 py-lg-4">
                $26,143,724,006.81
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
                <img
                  src="assets/img/landing/app-showcase/crypto/graphs/dot.svg"
                  width="108"
                  alt="DOT graph"
                />
              </div>
              <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary fs-sm w-100 w-lg-auto"
                >
                  Trade
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default StatsMobilev2;
