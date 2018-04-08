import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ percent, next, question, answer }) => (<div>
    <div>
        <progress value={ percent } max="100">{ percent }%</progress>
        <h2>Question:</h2>
        <h3>{question.text}</h3>
    </div>
    
    <div className="expand center">
        <img className="align-center" src={question.image} alt={question.text} />
    </div>
    <div className="footer btn-group">
        <Link to={next} onClick={() => answer(question, true)} className="btn">Yes</Link>
        <Link to={next} onClick={() => answer(question, false)} className="btn">No</Link>
    </div>
</div>)

export default connect(state => ({
    percent: (100.0 * state.index / state.test.length).toFixed(1),
    next: (state.index >= state.test.length - 1) ? '/test/results' : '/test/question',
    question: state.test[ Math.max(0, state.index) ]
}), dispatch => ({
    answer: (question, answer) => dispatch(actions.answerQuestion(question, answer)),
}))(component)