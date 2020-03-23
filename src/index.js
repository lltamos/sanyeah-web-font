import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routesConfig from './router';


const APP = (
  <Router >
    <Switch>
      {
        routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))
       }
    </Switch>
  </Router>
);
ReactDOM.render(APP, document.getElementById('root'));
