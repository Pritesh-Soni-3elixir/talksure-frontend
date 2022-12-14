import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MobileAppShowcaseV2 from "./pages/MobileAppShowcaseV2";
import MobileAppShowcaseV1 from "./pages/MobileAppShowcaseV1";
import Error404 from "./pages/Error404";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import LandingOnlineCourses from "./pages/LandingOnlineCourses";
import PortfolioCourses from "./pages/PortfolioCourses";
import HostForm from "./pages/HostForm";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      {/* the first match will be rendered, so more specific path should be on top */}
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/host-form">
          <HostForm />
        </Route>
        <Route path="/landing-online-courses">
          <LandingOnlineCourses />
        </Route>
        <Route path="/portfolio-courses">
          <PortfolioCourses />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-and-condition">
          <TermsAndCondition />
        </Route>
        <Route path="/mobile-v1">
          <MobileAppShowcaseV1 />
        </Route>
        <Route path="/mobile-v2">
          <MobileAppShowcaseV2 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/error404">
          <Error404 />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
