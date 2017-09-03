import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app'
import Menu from './menu'
import Game from './game'
import Help from './help'

var routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={Menu} />
            <Route path='/game' component={Game} />
        </div>
    </BrowserRouter>
);

module.exports = routes;