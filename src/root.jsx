import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./containers/home";
import FollowUp from "./containers/follow-up";
import Test from "./containers/test";

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter basename="/">
      <div className="wrapper">
        <Route path="/follow-up" component={FollowUp} />
        <Route path="/test" component={Test} />
        <Route path="*" component={Home} />
      </div>
    </HashRouter>
  </Provider>
);
