import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import DashBoard from "./components/mypage/DashBoard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
