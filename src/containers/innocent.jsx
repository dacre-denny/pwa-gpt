import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <div>
        <h1>The Good Judge</h1>
        <h3>Can a good judge let a criminal go free?</h3>
    </div>
    <div className="expand">
        <p>
            <b>Of course not!</b> A good judge will uphold the Law and require justice to be served.
        </p>
        <p>
            In the same way that breaking civil law makes us criminals, breaking God's Law makes us guilty before Him.
        </p>
    </div>
    <div className="footer btn-group">
        <Link to={'/test/guilty'} className="btn">Judgement</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
}))(component)