import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ age, start }) => (<div>
  <div className="expand center">
    <h1>The Good Person Test</h1>
    <small>Are you good enough?</small>
    <form>
      <label>Age group</label>
      <div>
        <input name="age" id="1" type="radio" defaultChecked={age === 0} onClick={() => actions.setAgeRange(1)} />
        <label htmlFor="1">1</label>
      </div>
      <div>
        <input name="age" id="2" type="radio" defaultChecked={age === 1} onClick={() => actions.setAgeRange(2)} />
        <label htmlFor="2">2</label>
      </div>
      <div>
        <input name="age" id="3" type="radio" defaultChecked={age === 2} onClick={() => actions.setAgeRange(3)} />
        <label htmlFor="3">3</label>
      </div>
    </form>
  </div>
  <div className="footer btn-group">
    <Link to='/test/start' onClick={() => start()} className="btn">Take the test</Link>
  </div>
</div>)

export default connect(state => ({
  age: state.age
}), dispatch => ({
  start: () => dispatch(actions.startTest()),
}))(component)