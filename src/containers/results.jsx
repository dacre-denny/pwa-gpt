import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const Row = ({ question: { text, guilty } }) => (<li>
    <span>{text}</span><b>{ guilty ? 'yes' : 'no'}</b>
</li>)

const Summary = ({ test }) => (test.some(({ guilty }) => guilty) ?
<div>
    <p>
    You answered yes to some of these questions - what's the verdict?
    </p>
    <div className="footer btn-group">
        <Link to={'/test/judgement'} className="btn">Let's find out</Link>
    </div>
</div> :
<div>
    <p>That doesn't seem right!</p>
    <div className="footer btn-group">
        <Link to={'/test/what-about-you'} className="btn">Try again</Link>
    </div>
</div>)

const Component = ({ test }) => (<div>
    <div>
        <h2>The results are in,</h2>
        
    </div>
    <div className="expand">
        <ul className="results">
            {test.map((question, key) => (<Row key={key} question={question} />))}
        </ul>
    </div>
    <Summary test={test} />
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
}))(Component)