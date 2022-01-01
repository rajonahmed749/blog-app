import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TechNews from "./components/News/TechNews";
import Menubar from "./components/Common/Menubar/Menubar";

function App() {
  return (
    <div>
      <Router>
        <Menubar />
        <Switch>
          <Route path="/news">
            <TechNews />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
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
