import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="text-card">
        <p>{ this.props.answer }</p>
      </div>
    );
  }
}

export default Card;