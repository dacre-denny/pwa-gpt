import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const Row = ({ question : {text, guilty} }) => (<li>
    <span>{text}</span><i className={ `mdi ${ guilty ? 'mdi-close-circle' : 'mdi-checkbox-blank-circle-outline' }` }></i>
</li>)

const Component = ({ test }) => (<div>
    <div>
        <h1>The Verdict</h1>
        <p>If you were to die tonight, and appear before the Judge of the Universe guilty of:</p>
    </div>
    <div className="expand">
        <ul className="results">
        {test.map((question, key) => (<Row key={key} question={question} />))}
        </ul>
        <p>Based on these results, do you think you would be innocent or guilty?</p>
    </div>
    <div className="footer btn-group">
        <Link to={'/test/innocent'} className="btn">Innocent</Link>
        <Link to={'/test/guilty'} className="btn">Guilty</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
}))(Component)