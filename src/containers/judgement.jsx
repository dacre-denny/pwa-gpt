import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test, guiltyCount }) => (<div>
    <div>
        <h1>Judgement Day</h1>
        <p>
            Consider this; if someone breaks the law, what happens to that person?
        </p>
        <img className="align-center" src='/img/judgement.jpg' />
        <p>
            If you're found guilty of breaking God's moral law, do you think you would be going to Heaven, or to God's prision called Hell?
        </p>
    </div>
    <div className="expand">
        <div className="footer btn-group">
            <Link to={'/test/innocent'} className="btn">Heaven</Link>
            <Link to={'/test/guilty'} className="btn">Hell</Link>
        </div>
    </div>
</div>)

export default connect(state => ({
    guiltyCount: state.test.filter(({ guilty }) => guilty).length,
    test: state.test,
}), dispatch => ({

}))(component)