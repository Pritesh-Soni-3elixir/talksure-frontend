import React from "react";

const BackToTopButton = () => (
    // <div>
    <a href="#top" className="btn-scroll-top" data-scroll>
      <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i className="btn-scroll-top-icon bx bx-chevron-up" />
    </a>
    // {/* </div> */}
  );

export default BackToTopButton;
