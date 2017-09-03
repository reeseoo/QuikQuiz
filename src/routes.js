import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app'
import Menu from './menu'

var routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
            <Route path="/menu" component={Menu} />
        </div>
    </BrowserRouter>
);

module.exports = routes;