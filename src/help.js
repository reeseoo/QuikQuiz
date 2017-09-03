import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './linkbutton'

class Help extends Component {
  render() {
    return (
      <div>
        <p>Here is the help page</p>
        <LinkButton link="/" name="Back" />
      </div>
    );
  }
}

export default Help;