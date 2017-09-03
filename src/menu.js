import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/menu.css';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
      <h1>{props.name}</h1>
    </div>
  )
}

class Menu extends Component {
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
        <Link to="/game" >Start</Link>
        <MenuButton name="Start"/>
        <MenuButton name="Help"/>
        <MenuButton name="Quit"/>
      </div>
    );
  }
}

export default Menu;