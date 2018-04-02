import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const Container = () =>
    (<div>
        <h1>Recognize any of these people?</h1>
        <p>Would you consider these to be good people?</p>
        <div>
            <Link to='/what-about-you'>Yes</Link>
            <Link to='/what-about-you'>No</Link>
            <Link to='/what-about-you'>Some</Link>
        </div>
    </div>)

export default connect(
    state => ({
    }),
    dispatch => ({
    }),
)(Container)