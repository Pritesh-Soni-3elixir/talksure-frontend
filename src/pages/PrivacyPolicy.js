import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => (
    <div>
      <main className="page-wrapper">
        <Navbar />
        <PrivacyPolicyContent />
      </main>
    </div>
  );

export default PrivacyPolicy;
