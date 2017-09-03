import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';
import { Button } from 'react-bootstrap';

const LinkButton = (props) => {
    return (
      <div className="menu-button">
        <Link to={ props.link }>
          <Button>{props.name}</Button>
        </Link>
      </div>
    )
  }

  export default LinkButton;