import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TermsAndConditionContent from "../components/TermsAndConditionContent/TermsAndConditionContent";

const TermsAndCondition = () => {
  return (
    <div>
      <main className="page-wrapper">
        <Navbar />
        <TermsAndConditionContent />
      </main>
    </div>
  );
};

export default TermsAndCondition;
