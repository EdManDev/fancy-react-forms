import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Forget from "./auth/Forget";
import Confirm from "./auth/Confirm";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>you are not ashamed you stole my project</h1>
        <h1>tu n'as pas honte tu as volé mon projet</h1>
        <h1>no te avergüenzas de haber robado mi proyecto</h1>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forget" component={Forget} />
          <Route path="/confirm" component={Confirm} />
        </Switch>
      </div>
    );
  }
}
