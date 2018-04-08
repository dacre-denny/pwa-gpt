import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ age, start }) => (<div>
  <div className="content">
    <figure>Follow up</figure>
    <ul>
      <li>dacre<button>Delete</button></li>
    </ul>
  </div>
  <div className="footer btn-group">
    <Link to='/' className="btn">Home</Link>
  </div>
</div>)

export default connect(state => ({
  age: state.age
}), dispatch => ({
  
}))(component)