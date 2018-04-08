import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ guiltyCount }) => (<div>
    <div>
        <h1>The Good Judge</h1>
        <h3>Can a good judge let a criminal go free?</h3>
        <img className="align-center" src='/img/justice.jpg' />
    </div>
    <div className="expand">
        <p>
            A good judge must uphold the Law - justice must be served!
        </p>
        {
            (guiltyCount > 0) ? <i className="emphasise">Remember you just admitted to breaking { guiltyCount } of God's moral law{ guiltyCount > 1 ? 's' :'' }?</i> : null
        }        
        <p>
            Just as breaking civil law makes us criminals, breaking God's Law makes us guilty before Him...
        </p>
    </div>
    <div className="footer btn-group">
        <Link to={'/test/guilty'} className="btn">Judgement Day</Link>
    </div>
</div>)

export default connect(state => ({
    guiltyCount : state.test.filter(({ guilty }) => guilty).length,
}), dispatch => ({
}))(component)