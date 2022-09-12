import React from "react";

const RightsReserved = () => (
    <footer
      className="container text-md-start text-center py-lg-5 py-4"
      style={{ transform: "translateY(-100%)" }}
    >
      <div className="row">
        <div className="col-xl-11 offset-xl-1">
          <p className="nav d-block fs-sm text-center text-md-start mb-0">
            &copy; All rights reserved. Made by
            <a
              className="nav-link d-inline-block p-0"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Createx Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );

export default RightsReserved;
