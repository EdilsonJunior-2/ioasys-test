import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = window.localStorage.getItem("@ioasys/logged");

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  location: PropTypes.any,
};

export default PrivateRoute;
