import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./containers/home";
import FollowUp from "./containers/follow-up";
import Test from "./containers/test";

export default ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/follow-up" component={FollowUp} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  </Provider>
);
