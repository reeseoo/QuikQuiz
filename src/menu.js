import React, { Component } from 'react';
import './css/menu.css';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
      <button>{props.name}</button>
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
        <MenuButton name="Start"/>
        <MenuButton name="Help"/>
        <MenuButton name="Quit"/>
      </div>
    );
  }
}

export default Menu;