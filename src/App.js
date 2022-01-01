import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TechNews from "./components/News/TechNews";
import Menubar from "./components/Common/Menubar/Menubar";
import Technology from "./components/Technology/Technology";
import Entertainment from "./components/Entertainment/Entertainment";

function App() {
  return (
    <div>
      <Router>
        <Menubar />
        <Switch>
          <Route path="/news">
            <TechNews />
          </Route>
          <Route path="/technology">
            <Technology/>
          </Route>
          <Route path="/entertainment">
            <Entertainment/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
