import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AgeSelection from './age-selection'
import Question from './question'

const Container = () => (<div>
    <div>
    <h1>What about you?</h1> 
    </div>
    <div className="expand">
        <p>I think I am:</p>
        <div className="btn-stack">
            <Link to='/test/question' className="btn">Perfect</Link>
            <Link to='/test/question' className="btn">A good person</Link>
            <Link to='/test/question' className="btn">Somewhere in between</Link>
            <Link to='/test/judgement' className="btn">A bit bad</Link>
            <Link to='/test/judgement' className="btn">A terrible person!</Link>
            <Link to='/test/question' className="btn">Not sure</Link>
        </div> 
    </div> 
</div>);

export default connect(
    state => ({
    }),
    dispatch => ({
        start: () => dispatch(goto('age'))
    }),
)(Container)