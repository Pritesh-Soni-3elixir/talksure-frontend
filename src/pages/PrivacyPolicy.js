import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <div>
      <main className="page-wrapper">
        <Navbar />
        <PrivacyPolicyContent />
      </main>
    </div>
  );
};

export default PrivacyPolicy;
