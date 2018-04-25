import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ guiltyCount }) =>
    (<div>
        <div className="header">
            <h1>The Good Judge</h1>
            <h3>Can a good judge let a criminal go free?</h3>
        </div>
        <div className="content scroll">
            <img className="align-center" src='/img/justice.jpg' />
            <p>
                A good judge must uphold the Law - justice must be served!
        </p>
            {
                (guiltyCount > 0) ? <i className="emphasise">During the test, you admitted to breaking {guiltyCount} of God's moral law{guiltyCount > 1 ? 's' : ''}</i> : null
            }
            <p>
                Just as breaking civil law makes us a criminal, breaking God's Law makes us guilty before Him. If God is good, how can He let us go free..
        </p>
        </div>
        <div className="footer btn-group">
            <Link to={'/test/judgement'} className="btn">Back to Judgement Day</Link>
        </div>
    </div>)

export default connect(state => ({
    guiltyCount: state.test.filter(({ guilty }) => guilty).length,
}), dispatch => ({
}))(component)