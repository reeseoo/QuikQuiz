import React, { Component } from 'react';
import './css/menu.css';

const MenuButton = (props) => {
  return (
    <div>
      <h1>Button</h1>
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
        <MenuButton />
        <MenuButton />
        <MenuButton />
      </div>
    );
  }
}

export default Menu;