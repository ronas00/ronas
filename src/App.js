import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router >
  );
}

export default App;