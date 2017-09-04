import React, { Component } from 'react';

class Timer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {time: 60};
  }

  render() {
    return (
      <div className="timer">
        <h1>{this.time}</h1>
      </div>
    );
  }
}

export default Timer;