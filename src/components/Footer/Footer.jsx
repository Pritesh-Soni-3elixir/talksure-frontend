import React from "react";

const Footer = () => (
    <div>
      <footer className="footer border-top pt-5 pb-4 pb-lg-5">
        <div className="container text-center pt-2 pt-md-4 pt-lg-5 pb-xl-3">
          <div className="row justify-content-center pt-xxl-2">
            <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
              <h2 className="h1 pb-3 mb-3">Subscribe to Our Newsletter</h2>
              <form
                className="subscription-form position-relative validate"
                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
              >
                <div className="d-flex flex-column flex-sm-row">
                  <div className="position-relative w-100 mb-3 mb-sm-0 me-sm-3">
                    <input
                      className="form-control form-control-lg ps-5"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email"
                      required
                    />
                    <i className="bx bx-envelope fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3" />
                  </div>
                  <button
                    className="btn btn-primary shadow-primary btn-lg"
                    type="submit"
                    name="subscribe"
                  >
                    Subscribe*
                  </button>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups  */}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    className="subscription-form-antispam"
                    type="text"
                    name="b_c7103e2c981361a6639545bd5_29ca296126"
                    tabIndex="-1"
                  />
                </div>
                <p className="mt-4 mb-0">
                  *Enjoy using Silicon Template and stay tuned for the latest
                  updates and news.
                </p>
                <div className="subscription-status position-absolute top-100 start-50 translate-middle-x" />
              </form>
            </div>
          </div>
          <div className="pt-5 mt-lg-3 mt-xl-4">
            <p className="text-muted mb-0">
              &copy; All rights reserved. Made with
              <i className="bx bx-heart d-inline-block fs-lg text-gradient-primary align-middle mt-n1 mx-1" />
              by&nbsp;
              <a
                href="https://createx.studio/"
                className="text-muted"
                target="_blank"
                rel="noopener noreferrer"
              >
                Createx Studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

export default Footer;
