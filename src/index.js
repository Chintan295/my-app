import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Problem from './Problem';
import Gotocontest from './Gotocontest'
import Recent_Activity from './Recent_Activity'
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Contestpage from './Contestpage';
import Submit from './Submit';
import Ranklist from './Ranklist';
const routing = (
    <Router>
      <div>
        <Switch>
        <Route exact path="/my-app/recent_activity/:id1" component={Recent_Activity} />
        <Route exact path="/my-app/submit/:id1" component={Submit} />
        <Route exact path="/my-app/ranklist/:id" component={Ranklist} />
        <Route exact path="/my-app/contest/:id1/:id2" component={Problem} />
        <Route exact path="/my-app/contest/:id" component={Contestpage} />
        <Route exact path="/my-app/Gotocontest" component={Gotocontest} />
        <Route exact path="/my-app" component={Login} />
        </Switch>
      </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
