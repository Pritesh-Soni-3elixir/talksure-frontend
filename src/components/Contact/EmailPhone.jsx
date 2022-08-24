import React from "react";

const EmailPhone = () => {
  return (
    <div>
      <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
        <div className="row justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
          <div className="col-xxl-8 col-xl-9 col-lg-10 pt-sm-2 pt-md-5">
            <div className="d-sm-flex">
              <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
                <div className="card-body p-0">
                  <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-envelope"></i>
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3">
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                </div>
                <div className="card-footer border-0 p-0">
                  <a
                    href="mailto:email@example.com"
                    className="btn btn-lg btn-primary"
                  >
                    Send email
                  </a>
                </div>
              </div>
              <div className="vr text-border d-none d-sm-inline-block m-4"></div>
              <div className="card w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5">
                <div className="card-body p-0">
                  <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-phone-call"></i>
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3">
                    If you need immediate assistance feel free to call us any
                    time.
                  </p>
                </div>
                <div className="card-footer border-0 p-0">
                  <a href="tel:4065550120" className="btn btn-lg btn-primary">
                    Call us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailPhone;
