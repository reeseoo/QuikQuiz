import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = { };
  }
  */

  render() {
    return (
      <div>
        <h1>Quik Quiz</h1>
        <Link to="/menu">Menu</Link>
      </div>
    );
  }
}

export default App;