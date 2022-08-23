import React from "react";

const FooterMobilev1 = () => {
  return (
    <div>
      <footer className="footer pt-5 pb-4 pb-lg-5">
        <div className="container text-center pt-lg-3">
          <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
            <img
              src="assets/img/logo.svg"
              className="me-2"
              width="60"
              alt="Silicon"
            />
            <span className="fs-4">Silicon</span>
          </div>
          <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Account
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column flex-sm-row justify-content-center">
            <a href="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3">
              <img
                src="assets/img/market/appstore-light.svg"
                className="light-mode-img"
                width="124"
                alt="App Store"
              />
              <img
                src="assets/img/market/appstore-dark.svg"
                className="dark-mode-img"
                width="124"
                alt="App Store"
              />
            </a>
            <a href="#" className="btn btn-dark btn-lg px-3 py-2 mb-3">
              <img
                src="assets/img/market/googleplay-light.svg"
                className="light-mode-img"
                width="139"
                alt="Google Play"
              />
              <img
                src="assets/img/market/googleplay-dark.svg"
                className="dark-mode-img"
                width="139"
                alt="Google Play"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center pt-4 mt-lg-3">
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-facebook mx-2"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-secondary btn-instagram mx-2"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-twitter mx-2">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-youtube mx-2">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
          <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
            <span className="opacity-80">
              &copy; All rights reserved. Made by{" "}
            </span>
            <a
              className="nav-link d-inline-block p-0"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener"
            >
              Createx Studio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterMobilev1;
