import React from "react";

const Faq = () => (
    <div>
      <section className="container py-5 mb-lg-2">
        <div className="row py-2 py-md-4 py-lg-5">
          <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <h2 className="pb-3 mb-1 mb-lg-3">
              Any questions? <br className="d-none d-md-inline" />
              Check out the FAQs
            </h2>
            <p className="fs-lg pb-3 mb-2 mb-lg-3">
              Still have unanswered questions and need to get in touch?
            </p>
            <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
              <div className="col">
                <div className="card card-hover">
                  <div className="card-body pb-3">
                    <i className="bx bxs-phone-call d-block fs-2 text-primary mb-2 py-1" />
                    <p className="fs-sm mb-2">Still have questions?</p>
                    <a href="#" className="btn btn-link stretched-link px-0">
                      Call us
                      <i className="bx bx-right-arrow-alt fs-xl ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover">
                  <div className="card-body pb-3">
                    <i className="bx bx-message-rounded-dots d-block fs-2 text-success mb-2 py-1" />
                    <p className="fs-sm mb-2">Still have questions?</p>
                    <a
                      href="#"
                      className="btn btn-link text-success stretched-link px-0"
                    >
                      Chat with us
                      <i className="bx bx-right-arrow-alt fs-xl ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 offset-xl-1">
            <div className="accordion" id="faq">
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q1-heading">
                  <button
                    className="accordion-button shadow-none rounded-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q1"
                    aria-expanded="true"
                    aria-controls="q1"
                  >
                    Is any of my personal information stored in the App?
                  </button>
                </h2>
                <div
                  id="q1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="q1-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor
                      ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                      Aliquet pretium cursus adipiscing gravida et consequat
                      lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                      lectus non. Massa cursus molestie lorem scelerisque
                      pellentesque. Nisi, enim, arcu purus gravida adipiscing
                      euismod montes, duis egestas. Vehicula eu etiam quam
                      tristique tincidunt suspendisse ut consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in
                      eu tortor, faucibus et lacinia posuere. Turpis sit viverra
                      lorem suspendisse lacus aliquam auctor vulputate. Quis
                      egestas aliquam nunc purus lacus, elit leo elit facilisi.
                      Dignissim amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q2-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q2"
                    aria-expanded="false"
                    aria-controls="q2"
                  >
                    What formats can I download my transaction history in?
                  </button>
                </h2>
                <div
                  id="q2"
                  className="accordion-collapse collapse"
                  aria-labelledby="q2-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor
                      ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                      Aliquet pretium cursus adipiscing gravida et consequat
                      lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                      lectus non. Massa cursus molestie lorem scelerisque
                      pellentesque. Nisi, enim, arcu purus gravida adipiscing
                      euismod montes, duis egestas. Vehicula eu etiam quam
                      tristique tincidunt suspendisse ut consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in
                      eu tortor, faucibus et lacinia posuere. Turpis sit viverra
                      lorem suspendisse lacus aliquam auctor vulputate. Quis
                      egestas aliquam nunc purus lacus, elit leo elit facilisi.
                      Dignissim amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q3-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q3"
                    aria-expanded="false"
                    aria-controls="q3"
                  >
                    Can I schedule future transfers?
                  </button>
                </h2>
                <div
                  id="q3"
                  className="accordion-collapse collapse"
                  aria-labelledby="q3-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor
                      ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                      Aliquet pretium cursus adipiscing gravida et consequat
                      lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                      lectus non. Massa cursus molestie lorem scelerisque
                      pellentesque. Nisi, enim, arcu purus gravida adipiscing
                      euismod montes, duis egestas. Vehicula eu etiam quam
                      tristique tincidunt suspendisse ut consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in
                      eu tortor, faucibus et lacinia posuere. Turpis sit viverra
                      lorem suspendisse lacus aliquam auctor vulputate. Quis
                      egestas aliquam nunc purus lacus, elit leo elit facilisi.
                      Dignissim amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q4-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q4"
                    aria-expanded="false"
                    aria-controls="q4"
                  >
                    When can I use Banking App services?
                  </button>
                </h2>
                <div
                  id="q4"
                  className="accordion-collapse collapse"
                  aria-labelledby="q4-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor
                      ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                      Aliquet pretium cursus adipiscing gravida et consequat
                      lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                      lectus non. Massa cursus molestie lorem scelerisque
                      pellentesque. Nisi, enim, arcu purus gravida adipiscing
                      euismod montes, duis egestas. Vehicula eu etiam quam
                      tristique tincidunt suspendisse ut consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in
                      eu tortor, faucibus et lacinia posuere. Turpis sit viverra
                      lorem suspendisse lacus aliquam auctor vulputate. Quis
                      egestas aliquam nunc purus lacus, elit leo elit facilisi.
                      Dignissim amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q5-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q5"
                    aria-expanded="false"
                    aria-controls="q5"
                  >
                    Can I create my own password that is easy for me to
                    remember?
                  </button>
                </h2>
                <div
                  id="q5"
                  className="accordion-collapse collapse"
                  aria-labelledby="q5-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor
                      ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                      Aliquet pretium cursus adipiscing gravida et consequat
                      lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                      lectus non. Massa cursus molestie lorem scelerisque
                      pellentesque. Nisi, enim, arcu purus gravida adipiscing
                      euismod montes, duis egestas. Vehicula eu etiam quam
                      tristique tincidunt suspendisse ut consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in
                      eu tortor, faucibus et lacinia posuere. Turpis sit viverra
                      lorem suspendisse lacus aliquam auctor vulputate. Quis
                      egestas aliquam nunc purus lacus, elit leo elit facilisi.
                      Dignissim amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm">
                <h2 className="accordion-header" id="q6-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q6"
                    aria-expanded="false"
                    aria-controls="q6"
                  >
                    What happens if I forget or lose my password?
                  </button>
                </h2>
                <div
                  id="q6"
                  className="accordion-collapse collapse"
                  aria-labelledby="q6-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor
                      ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                      Aliquet pretium cursus adipiscing gravida et consequat
                      lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                      lectus non. Massa cursus molestie lorem scelerisque
                      pellentesque. Nisi, enim, arcu purus gravida adipiscing
                      euismod montes, duis egestas. Vehicula eu etiam quam
                      tristique tincidunt suspendisse ut consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in
                      eu tortor, faucibus et lacinia posuere. Turpis sit viverra
                      lorem suspendisse lacus aliquam auctor vulputate. Quis
                      egestas aliquam nunc purus lacus, elit leo elit facilisi.
                      Dignissim amet adipiscing massa integer.
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

export default Faq;
