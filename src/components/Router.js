import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
