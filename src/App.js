import { useEffect } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import { FooterContainer } from "./components/footer/footer";
import LandingPage from "./components/landingPage/landingPage";
import Error404 from "./components/layout/Error404";
import Navbar from "./components/layout/navbar/navbar";

function App() {

  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      { location.pathname === '/' ? <></> : <Navbar /> }

      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        
          <Route path="/about" exact>
             <About />
          </Route>

          <Route component={Error404}/>
      </Switch>

      { location.pathname === '/' ? <></> : <FooterContainer /> }
    </>
  );
}

export default App;
