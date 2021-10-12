import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import { Container } from './styles';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
