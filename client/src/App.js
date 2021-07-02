import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Submit from "./Submit";
import View from "./View";
import { Menu } from "semantic-ui-react";

export default function App() {
  return (
    <Router>
      <main>
        <Menu>
          <Menu.Item header>
            <Link to="/">Hungry Hungry Duckos</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/view">View Feedings</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/submit">Submit a Report</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/submit">
            <Submit />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/">
            <h1>Welcome to Hungry Hungry Duckos</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
