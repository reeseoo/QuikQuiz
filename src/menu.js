import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './linkbutton';
import './css/main.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <h1 className="title-main">Quik Quiz</h1>
        <LinkButton link="/game" name="Start"/>
        <LinkButton link="/help" name="Help"/>
      </div>
    );
  }
}

export default Menu;