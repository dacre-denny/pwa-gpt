import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AgeSelection from './age-selection'
import Question from './question'

const Container = () => (<div>
    <div className="content">
        <h1>What about you?</h1>
        <div className="btn-stack">
            <Link to='/question' className="btn">I'm a good person</Link>
            <Link to='/judgement' className="btn">I'm a terrible person!</Link>
            <Link to='/question' className="btn">No sure</Link>
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