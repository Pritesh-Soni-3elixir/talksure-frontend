import React from "react";
import { Link } from "react-router-dom";

const NavbarAbout = () => {
  return (
    <div>
      <header className="header navbar navbar-expand-lg position-absolute navbar-sticky bg-light">
        <div className="container px-3">
          <Link to="/home" className="navbar-brand pe-3">
            <img src="assets/img/logo.svg" width="47" alt="Silicon" />
            Silicon
          </Link>
          <div id="navbarNav" className="offcanvas offcanvas-end">
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Landings
                  </a>
                  <div className="dropdown-menu p-0">
                    <div className="d-lg-flex">
                      <div
                        className="mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0"
                        style={{
                          backgroundImage: "url(assets/img/landings.jpg)",
                          margin: "-1px",
                        }}
                      ></div>
                      <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <Link to="/home" className="dropdown-item">
                              Mobile App Showcase v.1
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/landing-online-courses"
                              className="dropdown-item"
                            >
                              Online Courses
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <div className="d-lg-flex pt-lg-3">
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">About</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <Link to="/about" className="dropdown-item py-1">
                              About v.1
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">Portfolio</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <Link
                              to="/portfolio-courses"
                              className="dropdown-item py-1"
                            >
                              Courses
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">Contacts</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <Link className="dropdown-item py-1" to="/contact">
                              Contacts v.1
                            </Link>
                          </li>
                        </ul>
                        <h6 className="px-3 mb-2">Specialty</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link className="dropdown-item py-1" to="/error404">
                              404 Error v.1
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/signin" className="dropdown-item">
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="offcanvas-header border-top">
              <a
                href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/"
                className="btn btn-primary w-100"
                target="_blank"
                rel="noopener"
              >
                <i className="bx bx-cart fs-4 lh-1 me-1"></i>
                &nbsp;Buy now
              </a>
            </div>
          </div>
          <div
            className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
            data-bs-toggle="mode"
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="theme-mode"
            />
            <label
              className="form-check-label d-none d-sm-block"
              htmlFor="theme-mode"
            >
              Light
            </label>
            <label
              className="form-check-label d-none d-sm-block"
              htmlFor="theme-mode"
            >
              Dark
            </label>
          </div>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a
            href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/"
            className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
            target="_blank"
            rel="noopener"
          >
            <i className="bx bx-cart fs-5 lh-1 me-1"></i>
            &nbsp;Buy now
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavbarAbout;
