import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import { FooterContainer } from "./components/footer/footer";
import LandingPage from "./components/landingPage/landingPage";
import Error404 from "./components/layout/Error404";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        
          <Route path="/about" exact>
             <About />
          </Route>

          <Route component={Error404}/>
      </Switch>
      <FooterContainer />
    </BrowserRouter>
  );
}

export default App;
