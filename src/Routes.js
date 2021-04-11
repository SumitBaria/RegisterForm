import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./SignupForm/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
