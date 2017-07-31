import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

// Layouts
import Full from './layouts/Full/'

// Pages without layout
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'

const history = createBrowserHistory();

ReactDOM.render((
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/login" name="Login" component={Login}/>
      <Route path="/register" name="Register" component={Register}/>
      <Route path="/not-found" name="Notfound" component={Page404}/>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
