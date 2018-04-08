import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Question from './question'

import * as actions from '../store/actions'

const Container = ({ startTest }) => (<div>
    <div>
    <h1>Are you good enough?</h1> 
    <h3>If there is a Heaven, do think you're going?</h3>
    </div>
    <div className="expand">
        <div className="btn-stack">
            <Link to='/test/question' className="btn" onClick={ () => startTest() } >Yes for sure!</Link>
            <Link to='/test/question' className="btn" onClick={ () => startTest() }>Pretty sure</Link>
            <Link to='/test/question' className="btn" onClick={ () => startTest() }>Not sure</Link>
            <Link to='/test/judgement' className="btn" onClick={ () => startTest() }>Probably not</Link>
            <Link to='/test/judgement' className="btn" onClick={ () => startTest() }>Definitely not</Link>
        </div> 
    </div> 
</div>);

export default connect(
    state => ({
    }),
    dispatch => ({
        startTest: (question, answer) => dispatch(actions.startTest()),
    }),
)(Container)