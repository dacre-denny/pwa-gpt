import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ guiltyCount, endTest }) => (<div>
    <div>
        <h1>Does that concern you?</h1>
        <p>
            If you were to die tonight, and stand before God on Judgement Day, that you'd be found guilty of
            breaking His Law on at least { guiltyCount } count{ guiltyCount > 1 ? 's':''}?
        </p>
        <hr/>
        <h3>If there was a way out of this mess, would you want to know?</h3>
    </div>
    <div className="footer btn-group">
        <Link to={'/'} className="btn" onClick={ () => endTest() }>No</Link>
        <Link to={'/test/gospel'} className="btn">Yes</Link>
    </div>
</div>)

export default connect(state => ({
    guiltyCount : state.test.filter(({ guilty }) => guilty).length,
}), dispatch => ({
    endTest : () => dispatch(actions.endTest())
}))(component)