import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './menu'
import Game from './game'
import Help from './help'

const Main = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Menu} />
                <Route path='/help' component={Help} />
                <Route path='/game' component={Game} />
            </Switch>
        </BrowserRouter>
    </main>
)

export default Main;