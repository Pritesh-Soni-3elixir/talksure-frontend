import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
import MobileAppShowcaseV2 from "./pages/MobileAppShowcaseV2";
import MobileAppShowcaseV1 from "./pages/MobileAppShowcaseV1";

function App() {
  return (
    <div>
      {/* the first match will be rendered, so more specific path should be on top */}
      <Switch>
        <Route path="/mobile-v1">
          <MobileAppShowcaseV1 />
        </Route>
        <Route path="/mobile-v2">
          <MobileAppShowcaseV2 />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
