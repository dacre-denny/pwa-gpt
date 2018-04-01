import React from 'react';
import { connect } from 'react-redux'

import AgeSelection from './containers/age-selection'

const Container = class extends React.Component {
    render() {
        return <div>
            <h1>Hello, this.props.name</h1>

            <AgeSelection />
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



const RegContainer = connect(
    state => ({ 
        screen : getView
    }),
    dispatch => ({
        start: () => dispatch(goto('age'))
    }),
)(Container)

export default RegContainer