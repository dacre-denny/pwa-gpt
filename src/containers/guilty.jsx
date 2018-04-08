import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ guiltyCount }) => (<div>
    <div>
        <h1>Does that concern you?</h1>
    </div>
    <div className="footer btn-group">
        <Link to={'/test/gospel'} className="btn">Yes</Link>
    </div>
</div>)

export default connect(state => ({
    guiltyCount : state.test.filter(({ guilty }) => guilty).length,
}), dispatch => ({
}))(component)