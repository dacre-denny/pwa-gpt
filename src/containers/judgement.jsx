import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <h3>Results</h3>
    <p>
        If you were to appear before God would you be innocent or quilty?
    </p>
    <div>
        <Link to={'/gospel'} onClick={ () => answer('heaven') } >Heaven</Link>
        <Link to={'/gospel'} onClick={ () => answer('hell') }>Hell</Link>
    </div>
</div>)

export default connect(state => ({
    test : state.test,
}), dispatch => ({
    answer : (answer) => dispatch(actions.answerJudgement(question, answer)),
}))(component)