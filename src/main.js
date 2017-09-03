import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from './menu'
import Game from './game'
import Help from './help'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Menu}/>
      <Route path='/help' component={Help}/>
      <Route path='/game' component={Game}/>
    </Switch>
  </main>
)

export default Main;