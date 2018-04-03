import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AgeSelection from './age-selection'
import Question from './question'

const Container = () => (<div>
    <div className="content">
        <h1>What about you?</h1>
    </div>
    <div className="footer btn-group">
        <Link to='/question' className="btn">I'm a good person</Link>
        <Link to='/judgement' className="btn">I'm a terrible person!</Link>
        <Link to='/question' className="btn">No sure</Link>
    </div>
</div>);

const goto = (screen) => ({
    type: 'NAV',
    payload: screen
})

const getView = (state) => {
    switch (state.screen) {

        case 'age': {
            return <AgeSelection />
        }

        default: {
            return <div>dacre</div>
        }
    }
}

export default connect(
    state => ({
        screen: getView
    }),
    dispatch => ({
        start: () => dispatch(goto('age'))
    }),
)(Container)