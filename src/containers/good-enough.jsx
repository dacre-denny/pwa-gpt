import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Question from './question'

import * as actions from '../store/actions'

const Container = ({ startTest, showStart }) =>
    (<div>
        <div className="header">
            <h1>Are you good enough?</h1>
            <h3>Suppose there is a Heaven - do think you're good enough to go there when you die?</h3>
        </div>
        <div className="content scroll">
            <div className="radio-group">
                <input name="good-enough" id="opt-1" type="radio" onClick={() => startTest()} />
                <label htmlFor="opt-1">Yes for sure!</label>
                <input name="good-enough" id="opt-2" type="radio" onClick={() => startTest()} />
                <label htmlFor="opt-2">Pretty sure</label>
                <input name="good-enough" id="opt-3" type="radio" onClick={() => startTest()} />
                <label htmlFor="opt-3">Not sure</label>
                <input name="good-enough" id="opt-4" type="radio" onClick={() => startTest()} />
                <label htmlFor="opt-4">Probably not</label>
                <input name="good-enough" id="opt-5" type="radio" onClick={() => startTest()} />
                <label htmlFor="opt-5">Definitely not</label>
            </div>
        </div>
            {showStart &&
                <div className="footer">
                    <p>See how you go:</p>
                    <Link to='/test/question' className="btn" >Take the Good Person Test!</Link>
                </div>}
    </div>);

export default connect(
    state => ({
        showStart: state.index === 0
    }),
    dispatch => ({
        startTest: (question, answer) => dispatch(actions.startTest()),
    }),
)(Container)