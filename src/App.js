import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
