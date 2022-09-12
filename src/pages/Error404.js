import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Error404Content from "../components/Error/Error404Content";
import RightsReserved from "../components/Footer/RightsReserved";

const Error404 = () => (
    <div>
      <div>
        {/* <PageLoadingSpinner /> */}
        <main className="page-wrapper">
          <Navbar />
          <Error404Content />
        </main>
        <RightsReserved />
      </div>
    </div>
  );

export default Error404;
