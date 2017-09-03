import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';
import { Button } from 'react-bootstrap';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
<<<<<<< HEAD
      <Link to={ props.link } 
            onClick={ console.log("onClick works") } 
            >
                <Button bsStyle="success">{props.name}</Button>
=======
      <Link to={ props.link } >
        <Button>{props.name}</Button>
>>>>>>> c54ed4b7338782338a0b7ca5ae98c346dec6ce8b
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