import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
      <Link to={props.link} >{props.name}</Link>
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
        <MenuButton link="/" name="Start"/>
        <MenuButton link="/" name="Help"/>
        <MenuButton link="/" name="Quit"/>
      </div>
    );
  }
}

export default Menu;