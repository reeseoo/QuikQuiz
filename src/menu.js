import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';
import { Button } from 'react-bootstrap';

const MenuButton = (props) => {
  return (
    <div className="menu-button">
<<<<<<< HEAD
      <Link to={ props.link } >
=======
      <Button bsStyle="success">{props.name}</Button>
      <Link to={ props.link } 
            onClick={ console.log("onClick works") } 
            >
>>>>>>> 66d1bf2abaacd3ec2cb7d213496c9522fd6501ad
            { props.name }
      </Link>
    </div>
  )
}

class Menu extends Component {
  render() {
    return (
      <div>
        <h1>Quik Quiz</h1>
        <MenuButton link="/game" name="Start"/>
        <MenuButton link="/help" name="Help"/>
        <MenuButton link="/" name="Quit"/>
      </div>
    );
  }
}

export default Menu;