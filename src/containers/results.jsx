import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <div className="content">
        <h3>Results</h3>
        {test.map((question, key) => (<div key={key}>{question.text} - {question.answer}</div>))}
    </div>
    <div className="footer btn-group">
        <Link to='/judgement' className="btn">The verdict..</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
}))(component)