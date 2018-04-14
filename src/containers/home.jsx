import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ age, setTestChild, setTestTeenager, setTestAdult }) => (<div>
  <div className="content center">
    
    <h1>The Good Person Test</h1>
    <h3>Are you good enough?</h3>
    <form>
      <label>Start the test for</label>
      <div className="radio-group">
          <input name="age" id="age-child" type="radio" defaultChecked={age === 'child'} onClick={() => setTestChild()} />
          <label htmlFor="age-child">Child</label>
          <input name="age" id="age-teenager" type="radio" defaultChecked={age === 'teenager'} onClick={() => setTestTeenager()} />
          <label htmlFor="age-teenager">Teenager</label>
          <input name="age" id="age-adult" type="radio" defaultChecked={age === 'adult'} onClick={() => setTestAdult()} />
          <label htmlFor="age-adult">Adult</label>
      </div>
    </form>
  </div>
  <div className="footer btn-group">
    <Link to='/test/start' className="btn">Take the test</Link>
  </div>
</div>)

export default connect(state => ({
  age: state.age
}), dispatch => ({
  setTestChild: () => dispatch(actions.setTestAge('child')),
  setTestTeenager: () => dispatch(actions.setTestAge('teenager')),
  setTestAdult: () => dispatch(actions.setTestAge('adult')),
}))(component)