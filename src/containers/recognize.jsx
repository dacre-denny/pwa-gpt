import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const Container = () =>
    (<div>
        <div className="content">
            <h1>Recognize any of these people?</h1>
            <p>Would you consider these to be good people?</p>
        </div>
        <div className="footer btn-group">
            <Link to='/what-about-you' className="btn">Yes</Link>
            <Link to='/what-about-you' className="btn">No</Link>
            <Link to='/what-about-you' className="btn">Some</Link>
        </div>
    </div>)

export default connect(
    state => ({
    }),
    dispatch => ({
    }),
)(Container)