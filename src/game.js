import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Question from './components/question';
import Card from './components/card';
import Timer from './components/timer';

class Game extends Component {
  render() {
    return (
      <div>
        <Question question="Example question"/>
        <Timer time='60'/>
        <Card answer="Example answer"/>
        <Card answer="Example answer"/>
        <Card answer="Example answer"/>
        <Card answer="Example answer"/>
      </div>
    );
  }
}

export default Game;