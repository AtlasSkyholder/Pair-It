import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/pair-it" render={props => <Home {...props}/>} exact/>
      <Route path="/pair-it/game" render={props => <App {...props} />} />

      <Redirect to="/pair-it"></Redirect>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
