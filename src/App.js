import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/index.js";
import About from "./Components/Pages/About/index.js";
import Services from "./Components/Pages/Services/index.js";
import FAQS from "./Components/Pages/Faqs/index.js";
import Contact from "./Components/Pages/Contact/index.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={FAQS} />
      </Switch>
    </Router>
  );
}
export default App;
