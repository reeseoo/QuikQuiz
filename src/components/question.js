import React, { Component } from 'react';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="question">
        <p>{ props.question }</p>
      </div>
    );
  }
}

export default Question;