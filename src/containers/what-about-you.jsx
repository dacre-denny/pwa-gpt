import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AgeSelection from './age-selection'
import Question from './question'

const Container = class extends React.Component {
    render() {
        return <div>
          <h1>What about you?</h1>
          <div>
              <Link to={'/question'}>I'm a pretty good person</Link>
              <Link to={'/judgement'}>I'm a terrible person!</Link>
              <Link to={'/question'}>No sure</Link>
          </div>            
        </div>
            ;
    }
};

const goto = (screen) => ({
    type: 'NAV',
    payload: screen
})

const getView = (state) => {
    switch(state.screen) {

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
        screen : getView
    }),
    dispatch => ({
        start: () => dispatch(goto('age'))
    }),
)(Container)