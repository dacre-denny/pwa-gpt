import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const onNotConcerned = (dispatch, event) => {
    if (confirm("Are you really sure this doesn't concern you?")) {
      dispatch(actions.endTest())
    } else {
      event.preventDefault();
    }
  };

const component = ({ guiltyCount, onNotConcerned }) =>
    (<div>
        <div className="content center scroll">
            <h2>Does that concern you?</h2>
            <p>
                ..that if you were to die tonight, and come before God on Judgement Day, that you'd be found guilty of
            breaking His Law <b>on at least {guiltyCount} count{guiltyCount > 1 ? 's' : ''}</b>?
        </p>
        <hr />
        <h3>If there was a way to get out of this mess, would you want to know?</h3>
        
        </div>
        <div className="footer btn-group">
            <Link to={'/'} className="btn" onClick={ onNotConcerned }>No</Link>
            <Link to={'/test/gospel'} className="btn">Yes</Link>
        </div>
    </div>)

export default connect(state => ({
    guiltyCount: state.test.filter(({ guilty }) => guilty).length,
}), dispatch => ({
    onNotConcerned: (event) => onNotConcerned(dispatch, event)
}))(component)