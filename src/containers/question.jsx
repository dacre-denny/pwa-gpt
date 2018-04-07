import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ dacre, next, question, answer }) => (<div>
    <div>
        <h2>Question:</h2>
        <h3>{question.text}</h3>
    </div>
    
    <div className="expand center">
        <img className="align-center" src={question.image} alt={question.text} />
    </div>
    <div className="footer btn-group">
        <Link to={next} onClick={() => answer(question, true)} className="btn">Yes</Link>
        <Link to={next} onClick={() => answer(question, false)} className="btn">No</Link>
        <Link to={next} onClick={() => answer(question)} className="btn">Not sure</Link>
    </div>
</div>)

export default connect(state => ({
    next: state.questions_complete ? '/test/results' : '/test/question',
    question: state.test[state.index]
}), dispatch => ({
    answer: (question, answer) => dispatch(actions.answerQuestion(question, answer)),
}))(component)