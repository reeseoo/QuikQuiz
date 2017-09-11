import React, { Component } from 'react';

class Timer extends Component {
  
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="timer">
        <h1>{ this.props.time }</h1>
      </div>
    );
  }
}

export default Timer;