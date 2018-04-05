import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <div className="content">
        <h1>The Verdict</h1>
        <p>If you were to die tonight, and appear before the Judge of the Universe guilty of:</p>
        <ul className="results">
        {test.map((question, key) => (<li key={key}>{question.text} - {question.answer}<span className="yes"></span></li>))}
        </ul>
        <p>Do you think you would be found innocent or guilty?</p>
    </div>
    <div className="footer btn-group">
        <Link to={'/innocent'} onClick={() => answer('innocent')} className="btn">Innocent</Link>
        <Link to={'/gospel'} onClick={() => answer('guilty')} className="btn">Guilty</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
}))(component)