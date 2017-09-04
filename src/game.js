import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Question from './components/question';
import Card from './components/card';

class Game extends Component {
  render() {
    return (
      <div>
        <Question question="Example question"/>
        <Card answer="Example answer"/>
        <Card answer="Example answer"/>
        <Card answer="Example answer"/>
        <Card answer="Example answer"/>
      </div>
    );
  }
}

export default Game;