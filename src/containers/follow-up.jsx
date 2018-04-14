import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions'
import * as API from '../api'

const component = ({ followUps, deleteFollowUp }) => (<div>
  <div className="content">
    <figure>Follow up</figure>
    <ul>
      {
        followUps.map(({ name, contact, id }) => <li key={id}>
          <div>
            <h3>{ name }</h3>
            <h5>{ contact }</h5>
          </div>
          <button onClick={ () => deleteFollowUp(id) }>Delete</button>
        </li>)
      }
    </ul>
  </div>
  <div className="footer btn-group">
    <Link to='/' className="btn">Home</Link>
  </div>
</div>)

export default connect(state => ({
  followUps: API.getFollowUps()
}), dispatch => ({
  deleteFollowUp : (id) => dispatch(actions.deleteFollowUp(id))
}))(component)