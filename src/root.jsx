import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import Home from './containers/home'
import Recognize from './containers/recognize'
import WhatAboutYou from './containers/what-about-you'
import Question from './containers/question'
import Results from './containers/results'
import Judgement from './containers/judgement'
import Innocent from './containers/innocent'
import Gospel from './containers/gospel'
import FollowUp from './containers/follow-up'

export default ({ store }) => <Provider store={store} >
  <Router>
    <div className="screen-wrapper">
      <Route exact path="/" component={Home} />
      <Route path="/follow-up" component={FollowUp} />
      <Route path="/recognize" component={Recognize} />
      <Route path="/what-about-you" component={WhatAboutYou} />
      <Route path="/question/:number?" component={Question} />
      <Route path="/results" component={Results} />
      <Route path="/judgement" component={Judgement} />
      <Route path="/innocent" component={Innocent} />
      <Route path="/gospel" component={Gospel} />
    </div>
  </Router>
</Provider>;