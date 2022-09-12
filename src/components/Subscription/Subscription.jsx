import React from "react";

const Subscription = () => (
    <div>
      <section className="container">
        <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-5 px-xl-0">
          <div className="row align-items-center py-lg-4">
            <div className="col-xl-5 col-md-6 offset-xl-1 mb-4 mb-md-0">
              <div className="d-flex align-items-center">
                <img
                  src="assets/img/landing/app-showcase/notification-icon.svg"
                  width="78"
                  alt="Bell icon"
                />
                <div className="ps-3 ms-sm-3">
                  <h2 className="h4 mb-0">
                    Subscribe to our newsletter to stay informed about latest
                    updates
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="ps-lg-5 ms-xl-2">
                <form
                  className="input-group input-group-lg needs-validation"
                  noValidate
                >
                  <input
                    type="email"
                    id="subscr-email"
                    className="form-control rounded-start ps-5"
                    placeholder="Your email"
                    required
                  />
                  <i className="bx bx-envelope fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5" />
                  <div className="invalid-tooltip position-absolute top-100 start-0">
                    Please provide a valid email address.
                  </div>
                  <button type="submit" className="btn btn-primary px-sm-4">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default Subscription;
