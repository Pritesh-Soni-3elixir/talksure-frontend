import React from "react";

const ContactCta = () => {
  return (
    <div>
      <section className="container mt-n2">
        <div className="card border-0 bg-gradient-primary">
          <div
            className="card-body p-md-5 p-4 bg-size-cover"
            style={{
              backgroundImage:
                "url(assets/img/landing/digital-agency/contact-bg.png)",
            }}
          >
            <div className="py-md-5 py-4 text-center">
              <h3 className="h4 fw-normal text-light opacity-75">
                Want to work with us? Let’s talk
              </h3>
              <a
                href="mailto:email@example.com"
                className="display-6 text-light"
              >
                email@example.com
              </a>
              <div className="pt-md-5 pt-4 pb-md-2">
                <a href="contacts-v1.html" className="btn btn-lg btn-light">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCta;
