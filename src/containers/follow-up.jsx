import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../store/actions";
import * as API from "../api";

const component = ({ followUps, deleteFollowUp }) => (
  <div>
    <div className="header">
      <Link to='/' className="tab-left tab-round">
        <i className="mdi mdi-arrow-left"></i>
      </Link>
      <h1>Follow Ups</h1>
      <h3>Manage and contact follow ups from prior witnessing</h3>
    </div>
    <div className="content scroll"> 
      { followUps.length === 0 && <p className="emphasise">No follow up contact details saved</p> }
      { followUps.length > 0 && <ul className="follow-up">
        {followUps.map(({ name, date, contact, id }) => (
          <li key={id}>
            <div>
              <h3>{name}</h3>
              <small>{ date }</small>
              <p>{contact}</p>
            </div>
            <a className="delete mdi mdi-close" onClick={() => deleteFollowUp(id)}></a>
          </li>
        ))}
      </ul>
      }
    </div>
  </div>
);

export default connect(
  state => ({
    followUps: API.getFollowUps()
  }),
  dispatch => ({
    deleteFollowUp: id => dispatch(actions.deleteFollowUp(id))
  })
)(component);
