import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegador from "./components/Navegador/Navegador";
import Slider from "./components/Slider/Slider";
import Lives from "./components/Lives";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <header>
        <Navegador></Navegador>
      </header>
      <Switch>
        <Route path="/" exact>
          <main>
            <Slider></Slider>
            <Lives></Lives>
          </main>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
