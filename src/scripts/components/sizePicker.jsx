var React = require('react'),
    AppAction = require('../actions/app.actions.js');

require('../../styles/sizePicker.css');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            size: ""
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            size: nextProps.product.size
        })
    },
    render: function () {
        return (
            <div className="size-picker">
                <span onClick={ AppAction.setProductSize.bind(this, "s") }
                    className={ this.state.size == "s" ? "active" : "" }>S</span>
                <span onClick={ AppAction.setProductSize.bind(this, "m") }
                    className={ this.state.size == "m" ? "active" : "" }>M</span>
                <span onClick={ AppAction.setProductSize.bind(this, "l") }
                    className={ this.state.size == "l" ? "active" : "" }>L</span>
                <span onClick={ AppAction.setProductSize.bind(this, "xl") }
                    className={ this.state.size == "xl" ? "active" : "" }>XL</span>
            </div>
        );
    }
});
