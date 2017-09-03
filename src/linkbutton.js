import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './css/main.css';

const LinkButton = (props) => {
    return (
      <div className="wrapper-button">
        <Link to={ props.link }>
          <Button className="main-button">{ props.name }</Button>
        </Link>
      </div>
    )
  }

  export default LinkButton;