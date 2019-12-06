import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRouter";

import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import CreateBook from "./components/mypage/content/book/CreateBook";
import BookTable from "./components/mypage/content/table/BookTable";
import BookInfo from "./components/mypage/content/book/BookInfo";
import GraphList from "./components/mypage/content/user/GraphList";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user" exact component={GraphList} />
        <PrivateRoute path="/book" exact component={CreateBook} />
        <PrivateRoute path="/books" exact component={BookTable} />
        <PrivateRoute path="/book/:id" exact component={BookInfo} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
