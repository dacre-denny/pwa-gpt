import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import Home from './containers/home'
import Recognize from './containers/recognize'
import WhatAboutYou from './containers/what-about-you'
import Question from './containers/question'

export default ({store}) => <Provider store={ store } >
<Router>
<div>
    <ul>
<li><Link to="/">Home</Link></li>
        <li><Link to="/age">About</Link></li>
        </ul>
    <hr />
  <Route path="/" component={ Home } />
  <Route path="/recognize" component={Recognize} />
  <Route path="/what-about-you" component={WhatAboutYou} />
  <Route path="/question" component={Question} />
</div>
</Router>
</Provider>;