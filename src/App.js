import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Login from "./components/login";
import SignUp from "./components/signup";
import changePassword from "./components/changePassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/changePassword" component={changePassword} />
      </Switch>
    </Router >
  );
}

export default App;