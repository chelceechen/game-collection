import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import RouterLoading from "../components/RouterLoading";

const AppViews = () => (
  <Suspense fallback={<RouterLoading />}>
    <Switch>
      <Route path="/" component={lazy(() => import("./home"))} exact={true} />
      <Route path="/puzzle" component={lazy(() => import("./puzzle"))} />
      <Route path="/maze" component={lazy(() => import("./maze"))} />
      <Route path="/sokoban" component={lazy(() => import("./sokoban"))} />
    </Switch>
  </Suspense>
);

export default AppViews;
