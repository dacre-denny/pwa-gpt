import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ age, start }) => (<div>
  <h3>Ready?</h3>
  <form>
    <label>Age group</label>
    <div>
      <input name="age" id="1" type="radio" defaultChecked={ age === 0 } onClick={() => actions.setAgeRange(1)} />
      <label htmlFor="1">1</label>
    </div>
    <div>
      <input name="age" id="2" type="radio" defaultChecked={ age === 1 } onClick={() => actions.setAgeRange(2)} />
      <label htmlFor="2">2</label>
    </div>
    <div>
      <input name="age" id="3" type="radio" defaultChecked={ age === 2 } onClick={() => actions.setAgeRange(3)} />
      <label htmlFor="3">3</label>
    </div>
  </form>
  <div>
    <Link to='/recognize' onClick={() => start()}>TAKE THE TEST</Link>
  </div>
</div>)

export default connect(state => ({
  age : state.age
}), dispatch => ({
  start: () => dispatch(actions.startTest()),
}))(component)