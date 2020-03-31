import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "../../routes";

import "./style.scss";

// eslint-disable-next-line import/prefer-default-export
export const Container = () => (
  <div className="Container">
    <Router>
      <Switch>
        {Object.keys(Routes).map((route) => (
          <Route
            key={route}
            exact
            path={Routes[route].path}
            component={Routes[route].component}
          />
        ))}
      </Switch>
    </Router>
  </div>
);
