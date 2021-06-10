import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import FAQS from "./Components/Pages/Faqs";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/faqs" component={FAQS} />
      </Switch>
    </Router>
  );
}
export default App;
