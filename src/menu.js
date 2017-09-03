import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';
import { Button } from 'react-bootstrap';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
      <Link to={ props.link } onClick={ console.log("onClick works") }>
        <Button>{props.name}</Button>
      </Link>
    </div>
  )
}

class Menu extends Component {
  render() {
    return (
      <div>
        <MenuButton link="/game" name="Start"/>
        <MenuButton link="/help" name="Help"/>
      </div>
    );
  }
}

export default Menu;