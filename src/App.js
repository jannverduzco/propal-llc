import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import FAQS from "./Pages/Faqs";

function App() {
  return (
    <Router>
      <NavBar>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/faqs" component={FAQS} />
        </Switch>
      </NavBar>
    </Router>
  );
}
export default App;
