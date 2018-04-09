import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const Container = () =>
    (<div>
        <div>
            <h1>Famous people</h1>
            <p>Do you recognize these people? 
                <br/>
                Would you say these are good people?</p>
        </div>
        <div className="content scroll">
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
            <Link to='/test/what-about-you' className="btn">Yes</Link>
            <Link to='/test/what-about-you' className="btn">No</Link>
            <Link to='/test/what-about-you' className="btn">Not sure</Link>
        </div>
    </div>)

export default connect(
    state => ({
    }),
    dispatch => ({
    }),
)(Container)