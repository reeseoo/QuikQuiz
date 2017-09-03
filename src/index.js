var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes');

ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={App}/>
    </BrowserRouter>,
    document.getElementById('app')
)