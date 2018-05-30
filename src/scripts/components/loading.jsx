var React = require('react'),
    Spinner = require('../spin.js');

require('../../styles/loading.css');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            target: null
        }
    },
    componentDidMount: function() {
        this.setState({
            target: document.getElementsByClassName('spinner-container')[0]
        });
    },
    options: {
        lines: 12,
        length: 28,
        width: 14,
        radius: 42,
        scale: 0.3,
        color: '#fff',
        opacity: 0.25,
        left: '187.5px',
        top: '333.5px'
    },
    render: function() {
        var mainClassName = this.props.display ?
            'loading active' :
            'loading',
            target = this.state.target,
            spinner = new Spinner(this.options).spin(target);

        return (
            <div className={ mainClassName } >
                <div className="overlay"></div>
                <div className='spinner-container'></div>
            </div>
        );
    }
});
