import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const onSendFollowUp = (dispatch, contact) => {
    dispatch(actions.sendFollowUp())
    alert('Your details have been saved - thanks for taking the test!')
    dispatch(actions.restart())
}

const component = ({ sendFollowUp, setName, setContact, contact, name }) => (<div>

    <div className="header">
        <h1>The Gospel</h1>
    </div>
    <div className="content scroll">
        <h3>God's rescue plan to save sinners</h3>
        <p>
            We have all sinned and broken God's commandments in some way or another,
            </p>
        <img className="align-center" src='/img/crowd.jpg' />
        <i className="quote">
            All have sinned, and come short of the glory of God <sub>Romans 3:23</sub>
        </i>

        <p>
            The consequences of sin are incredibly serious,
            </p>
        <img className="align-center" src='/img/hell.jpg' />
        <i className="quote">
            The soul that sinneth, it shall die <sub>Ezekiel 18:20</sub>
        </i>
        <i className="quote">
            All liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.<sub>Revelation 21:8</sub>
        </i>
        <h3>Justice must be served.</h3>
        <p>The penalty for your sin must be paid - either by you, or by someone else who is able. This is where the good news begins,</p>
        <p>
            God provided a Way for your sin to be paid for - this means that your sin can be forgiven. In other words,
        </p>
        <h3 className="emphasise"> God has thrown you a life line.
                </h3>
        <img className="align-center" src='/img/lifeline.jpg' />
        <i className="quote">
            But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us <sub>Romans 5:8</sub>
        </i>
        <hr />
        <h3 className="emphasise">
            Jesus suffered and died, to take the penalty you deserve for your sin.
        </h3>
        <p>Simply put - You did the crime. Jesus paid the fine.</p>
        <img className="align-center" src='/img/blood.jpg' />
        <h3>So, what must you do to be saved?</h3>
        <ol>
            <li>
                <p>Achknowledge what Jesus has done on your behalf.</p>
                <i className="quote">
                    [Jesus] in whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace <sub>Ephesians 1:7</sub>
                </i>
            </li>
            <li>
                <p>Trust in Jesus' work on the cross to pay for your sin - recieve Jesus as your Lord and Saviour</p>
                <i className="quote">
                    if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved
                <sub>Romans 10:9</sub>
                </i>
            </li>
            <li>
                <p>Choose His way of life rather than your own - turn (repent) from things that offend Him (sin) and walk in His ways</p>
                <i className="quote">
                    If any man will come after me, let him deny himself, and take up his cross daily, and follow me.
                <sub>Luke 9:23</sub>
                </i>
            </li>
        </ol>
        <hr />
        <h3>Would you like to know more?</h3>
        <form>
            <label>Your name</label>
            <input type="text" value={ name } onChange={(event) => setName(event.target.value)} />
            <label>Your phone or email</label>
            <input type="text" value={ contact } onChange={(event) => setContact(event.target.value)}  />
            <Link to="/" className={"btn " + (!(name && contact) && 'disabled') } onClick={ (event) => {
                if(!(name && contact)) {event.preventDefault()}
                else {sendFollowUp(contact)}} }>Contact me</Link>
        </form>

    </div>
</div>)

export default connect(state => ({ 
    contact:state.form.contact,
    name:state.form.name,
}), dispatch => ({
    answer: (answer) => dispatch(actions.answerJudgement(question, answer)),
    setName: (name) => dispatch(actions.setField('name', name)),
    setContact: (contact) => dispatch(actions.setField('contact', contact)),
    sendFollowUp: (contact) => onSendFollowUp(dispatch, contact),
}))(component)