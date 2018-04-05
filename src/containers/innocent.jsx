import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <div className="content">
        <h3>The Good Judge</h3>
        <p>
            Can a good judge let a criminal go free?
            <br />Of course not!
            <br />A good judge will uphold the Law and require justice to be served.
            <br />
            <br />In the same way that breaking civil law makes us criminals, breaking God's Law makes us guilty before Him.
        </p>
    </div>
    <div className="footer btn-group">
        <Link to={'/judgement'} onClick={() => answer('guilty')} className="btn">Judgement</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
}))(component)