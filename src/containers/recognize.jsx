import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const Container = () =>
    (<div>
        <div className="content">
            <h1>Famous people</h1>
            <p>Would you say these are "good" people?</p>

        </div>
        <div className="scroll">

            <div className="grid-tiles">
                <div style={{ 'backgroundImage':'url(/img/beiber.jpg)' }}></div>
                <div style={{ 'backgroundImage':'url(/img/hitler.jpg)' }}></div>
                <div style={{ 'backgroundImage':'url(/img/jolie.jpg)' }}></div>
                <div style={{ 'backgroundImage':'url(/img/obama.jpg)' }}></div>
                <div style={{ 'backgroundImage':'url(/img/schwarzenegger.jpg)' }}></div>
                <div style={{ 'backgroundImage':'url(/img/winfrey.jpg)' }}></div>
            </div>
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