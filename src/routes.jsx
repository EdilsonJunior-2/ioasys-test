import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "./pages/Login";
import { Redirect } from "react-router";
import Home from "./pages/Home";
// import { Container } from './styles';

function Routes() {
  const isLoggedIn = window.localStorage.getItem("@ioasys/logged");

  return (
    <Router>
      <Route exact path="/">
        {isLoggedIn ? <Redirect to="/home" /> : <Login />}
      </Route>
      <PrivateRoute path="/home" component={Home} />
    </Router>
  );
}

export default Routes;
