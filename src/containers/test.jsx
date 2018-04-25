import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../store/actions";

import Recognize from "./recognize";
import WhatAboutYou from "./what-about-you";
import GoodEnough from "./good-enough";
import Question from "./question";
import Results from "./results";
import Judgement from "./judgement";
import Innocent from "./innocent";
import Guilty from "./guilty";
import Gospel from "./gospel";

const onCancel = (dispatch, event) => {
  if (confirm("Are you sure you want to end the test?")) {
    dispatch(actions.restart());
  } else {
    event.preventDefault();
  }
};

export default connect(
  state => ({}),
  dispatch => ({
    onCancel: (event) => onCancel(dispatch, event)
  })
)(({ match, onCancel }) => (
  <div className="test">
    <Link
      to="/"
      className="tab-right tab-round mdi mdi-close"
      onClick={ onCancel }
    />
    <Route path={`${match.url}/start`} component={Recognize} />
    <Route path={`${match.url}/what-about-you`} component={WhatAboutYou} />
    <Route path={`${match.url}/good-enough`} component={GoodEnough} />
    <Route path={`${match.url}/question`} component={Question} />
    <Route path={`${match.url}/results`} component={Results} />
    <Route path={`${match.url}/judgement`} component={Judgement} />
    <Route path={`${match.url}/guilty`} component={Guilty} />
    <Route path={`${match.url}/innocent`} component={Innocent} />
    <Route path={`${match.url}/gospel`} component={Gospel} />
  </div>
));
