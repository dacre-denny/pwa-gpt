import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ start }) => (<div>
  <h3>Ready?</h3>
  <div>
    <Link to='/recognize' onClick={() => start()}>TAKE THE TEST</Link>
  </div>
</div>)

export default connect(state => ({
}), dispatch => ({
  start: () => dispatch(actions.startTest()),
}))(component)