import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/index.js";
import About from "./Components/Pages/About/index.js";
import Services from "./Components/Pages/Services/index.js";
import Contact from "./Components/Pages/Contact/index.js";
import "./App.css";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
