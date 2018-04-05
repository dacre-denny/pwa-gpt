import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ dacre, next, question, answer }) => (<div>
    <div className="content">

        <h2>Question:</h2>
        <h3>{question.text}</h3>
        <img src={question.image} alt={question.text} />
    </div>
    <div className="footer btn-group">
        <Link to={next} onClick={() => answer(question, 'yes')} className="btn">Yes</Link>
        <Link to={next} onClick={() => answer(question, 'no')} className="btn">No</Link>
        <Link to={next} onClick={() => answer(question, 'unsure')} className="btn">Not sure</Link>
    </div>
</div>)

export default connect(state => ({
    next: state.question_index >= state.test.length - 1 ? '/results' : ('/question/' + state.question_index),
    question: state.test[state.question_index]
}), dispatch => ({
    answer: (question, answer) => dispatch(actions.answerQuestion(question, answer)),
}))(component)