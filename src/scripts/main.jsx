var React = require('react'),
    ReactDom = require('react-dom'),
    App = React.createFactory(require('./app.jsx'));

ReactDom.render(
    App(),
    document.getElementById('app')
);
