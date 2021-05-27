import "./App.css";
import NavBar from "./Components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="website-font">
      <Router>
        <NavBar />
       
      </Router>
    </div>
  );
}

export default App;
