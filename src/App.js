import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/:id" component={Wrapper} />
          <Redirect from="/" to="/1" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
