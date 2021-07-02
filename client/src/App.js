import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Submit from "./Submit";
import View from "./View";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
            <li>
              <Link to="/view">View</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/submit">
            <Submit />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
