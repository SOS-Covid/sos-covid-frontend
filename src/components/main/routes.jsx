import React from 'react'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'
import Panel from '../panel/panel'

const Routes = () => {

  return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Panel} />
                <Route exact path="/panel" component={Panel} />
            </Switch>
        </BrowserRouter>
  );
};

export default Routes
