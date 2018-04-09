import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = ({ startTest }) =>
    (<div>
        <div>
            <h1>What about you?</h1>
            <h3>Would you consider yourself to be a good person?</h3>
        </div>
        <div className="content scroll">
            <div className="btn-stack">
                <Link to='/test/good-enough' className="btn" >I'm Perfect!</Link>
                <Link to='/test/good-enough' className="btn" >I'm a good person</Link>
                <Link to='/test/good-enough' className="btn" >I'm somewhere in between</Link>
                <Link to='/test/good-enough' className="btn" >I'm on the bad side</Link>
                <Link to='/test/good-enough' className="btn" >I'm a terrible person!</Link>
            </div>
            <hr />
        </div>
        <div className="footer btn-group">
            <Link to='/test/good-enough' className="btn">I'm not sure</Link>
        </div>
    </div>);

export default connect(
    state => ({
    }),
    dispatch => ({

    }),
)(Container)