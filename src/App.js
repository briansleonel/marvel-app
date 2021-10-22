import { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import { FooterContainer } from "./components/footer/footer";
import Character from "./components/Home/character/character";
import Home from "./components/Home/home";
import LandingPage from "./components/landingPage/landingPage";
import Contacto from "./components/layout/contacto/Contacto";
import Error404 from "./components/layout/error404/error404";
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

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/contacto" exact>
          <Contacto />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path='/character/:idCharacter' component={Character} />

        <Route component={Error404}/>
      </Switch>

      { location.pathname === '/' ? <></> : <FooterContainer /> }
    </>
  );
}

export default App;
