import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <div className="content">
        <h3>Results</h3>
        <p>
            If you're found guilty before God, would you be going to Heaven or Hell?
        </p>
    </div>
    <div className="footer btn-group">
        <Link to={'/innocent'} onClick={() => answer('heaven')} className="btn">Heaven</Link>
        <Link to={'/gospel'} onClick={() => answer('hell')} className="btn">Hell</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
    answer: (answer) => dispatch(actions.answerJudgement(question, answer)),
}))(component)