var React = require('react');

require('../../styles/ritualsButton.css');

module.exports = React.createClass({
    render: function () {
        return (
            <div className={ "rituals-button " + this.props.type + ' ' + this.props.class }
                onClick={ this.props.callback }>
                { this.props.text }
            </div>
        );
    }
});
