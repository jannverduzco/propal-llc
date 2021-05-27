import "./App.css";
import NavBar from "./Components/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import FAQS from "./Pages/Faqs";

function App() {
  return (
    <div className="website-font">
      <Router>
      <NavBar>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faqs" component={FAQS} />
        </Switch>
        </NavBar>
      </Router>
    </div>
  );
}
export default App;
