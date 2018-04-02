import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AgeSelection from './age-selection'
import Question from './question'

const Container = () =>
    (<div>
        <h1>Recognize any of these people?</h1>
        <p>Would you consider these to be good people?</p>
        <div>
            <Link to='/what-about-you'>Yes</Link>
            <Link to='/what-about-you'>No</Link>
            <Link to='/what-about-you'>Some</Link>
        </div>

    </div>)

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