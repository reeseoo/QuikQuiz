import React, { Component } from 'react';
import './css/menu.css';
import { Button } from 'react-bootstrap';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
      <Button bsStyle="success">{props.name}</Button>
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