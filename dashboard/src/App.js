import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/layout/Alert";
import PrivateLayout from "./PrivateRoutes";
import PublicLayout from "./PublicRoutes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// import "./styles/scss/shards-dashboards.scss";
import "./css/themify-icons.css";
import "./css/animate.css";
import "./css/bootstrap.css";
import "./css/style.css";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section>
            <Alert />
            <Switch>
              <Route path="/app" component={PrivateLayout} />
              <Route path="/" component={PublicLayout} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
