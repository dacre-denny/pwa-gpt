import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <div>
        <h1>Results</h1>
        <p>
            If you're found guilty before God, would you be going to Heaven or Hell?
        </p>
    </div>
    <div className="expand">
        <div className="footer btn-stack">
            <Link to={'/test/innocent'} className="btn">Heaven</Link>
            <Link to={'/test/gospel'} className="btn">Hell</Link>
        </div>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
    
}))(component)