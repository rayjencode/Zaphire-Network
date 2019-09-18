import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardAdmin from "./components/dashboard/DashboardAdmin";

const PrivateLayout = () => {
  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/app/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/app/dashboard-admin"
          component={DashboardAdmin}
        />
      </Switch>
    </Fragment>
  );
};

export default PrivateLayout;
