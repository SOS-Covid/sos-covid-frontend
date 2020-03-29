import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from '../../routes'

export const Container = () => (
  <Router>
    <Switch>
      {Object.keys(Routes).map(route => (
        <Route
          key={route}
          exact
          path={Routes[route].path}
          component={Routes[route].component}
        />
      ))}
    </Switch>
  </Router>
)