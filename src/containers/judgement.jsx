import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test, guiltyCount }) =>
    (<div>
        <h1>First, consider this;</h1>
        <h3>
            If someone breaks the law, should they go free?
        </h3>
        <div className="content scroll">
            <img className="align-center" src='/img/judgement.jpg' />
            <i className="emphasise">
                What about you?
        </i>
            <p>
                If you're found guilty of breaking God's moral law, do you think you would be going to Heaven, or to God's prision called Hell?
        </p>
        </div>
        <div className="footer btn-group">
            <Link to={'/test/innocent'} className="btn">Heaven</Link>
            <Link to={'/test/guilty'} className="btn">Hell</Link>
        </div>
    </div>)

export default connect(state => ({
    guiltyCount: state.test.filter(({ guilty }) => guilty).length,
    test: state.test,
}), dispatch => ({

}))(component)