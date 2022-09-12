import React from "react";
import "./PageLoading.css";

const PageLoadingSpinner = () => (
    <div className="page-loading active">
      <div className="page-loading-inner">
        <div className="page-spinner" />
        <span>Loading...</span>
      </div>
    </div>
  );

export default PageLoadingSpinner;
