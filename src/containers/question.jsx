import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class extends React.Component {

    componentDidMount() {
        
    }

    onAnswerYes() {
        alert('yes')
    }

    onAnswerNo() {
        alert('no')
    }

    render() {
        return <div>
            <h3>Have you ever?</h3>
            <p>
                Ipsum
                Ipsum
                Ipsum
                Ipsum
              </p>
              <div>
                  <button onClick={ this.onAnswerYes }>Yes</button>
                  <button onClick={ this.onAnswerNo }>No</button>
                </div>
        </div>;
    }
}