import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider, connect } from 'react-redux' 

import Home from './containers/home'
import Recognize from './containers/recognize'
import WhatAboutYou from './containers/what-about-you'
import Question from './containers/question'
import Results from './containers/results'
import Judgement from './containers/judgement'
import Innocent from './containers/innocent'
import Gospel from './containers/gospel'
import FollowUp from './containers/follow-up'

const Test = ({ match }) => (
<div className='expand'>
  <Link to='/' onClick={ () => alert() } className="cancel mdi mdi-close"></Link>
  <Route path={`${ match.url }/start`} component={Recognize} />
  <Route path={`${match.url}/what-about-you`} component={WhatAboutYou} />
  <Route path={`${match.url}/question`} component={Question} />
  <Route path={`${match.url}/results`} component={Results} />
  <Route path={`${match.url}/guilty`} component={Judgement} />
  <Route path={`${match.url}/innocent`} component={Innocent} />
  <Route path={`${match.url}/gospel`} component={Gospel} />
</div>
)

export default ({ store }) => <Provider store={store} >
  <Router>
    <div className="screen-wrapper">
      <Route exact path="/" component={Home} />
      <Route path="/follow-up" component={FollowUp} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
</Provider>;