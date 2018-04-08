import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider, connect } from 'react-redux' 

import Home from './containers/home'
import Recognize from './containers/recognize'
import WhatAboutYou from './containers/what-about-you'
import GoodEnough from './containers/good-enough'
import Question from './containers/question'
import Results from './containers/results'
import Judgement from './containers/judgement'
import Innocent from './containers/innocent'
import Guilty from './containers/guilty'
import Gospel from './containers/gospel'
import FollowUp from './containers/follow-up'

const Test = ({ match }) => (
<div className='test-wrapper'>
  <Link to='/' onClick={ () => confirm(`Are you sure you want to stop the test?`) } className="cancel mdi mdi-close"></Link>
  <Route path={`${ match.url }/start`} component={Recognize} />
  <Route path={`${match.url}/what-about-you`} component={WhatAboutYou} />
  <Route path={`${match.url}/good-enough`} component={GoodEnough} />
  <Route path={`${match.url}/question`} component={Question} />
  <Route path={`${match.url}/results`} component={Results} />
  <Route path={`${match.url}/judgement`} component={Judgement} />
  <Route path={`${match.url}/guilty`} component={Guilty} />
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