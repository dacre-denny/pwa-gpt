import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ dacre, next, question, answer }) => (<div>
    <h3>{ question.text }</h3>
    <img src={ question.image } alt={ question.text } />
    <div>
        <Link to={next} onClick={ () => answer(question, 'yes') } >Yes</Link>
        <Link to={next} onClick={ () => answer(question, 'no') }>No</Link>
        <Link to={next} onClick={ () => answer(question, 'unsure') }>Unsure</Link>
    </div>
</div>)

export default connect(state => ({
    next : state.question_index >= state.test.length - 1 ? '/results' : ('/question/' + state.question_index),
    question : state.test[state.question_index]
}), dispatch => ({
    answer : (question, answer) => dispatch(actions.answerQuestion(question, answer)),
}))(component)