var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes');
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
