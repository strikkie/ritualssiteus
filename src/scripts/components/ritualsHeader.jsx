var React = require('react'),
    AppAction = require('../actions/app.actions.js'),
    navigate = require('react-mini-router').navigate,
    Icons = require('../../images/icons.png');

require('../../styles/ritualsHeader.css');

module.exports = React.createClass({
    componentWillMount: function () {
        if (this.props.cart) {
            var cartItems = this.props.cart.length;

            this.setState({
                cartItems: cartItems
            });
        }
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.cart) {
            var cartItems = nextProps.cart.length;

            this.setState({
                cartItems: cartItems
            });
        }
    },
    resetDemo: function () {
        AppAction.resetDemo();
        navigate('/');
    },
    render: function () {
        return (
            <header className="rituals-header">
                <section className="main-section">
                    <span className="hamburger icon"></span>
                    <span className="header-title"></span>
                </section>
                <section className="search-section">
                    <span className="loupe icon" onClick={ this.resetDemo }></span>
                    <span className="profile icon"></span>
                </section>
                <section className="bag-section">
                    <span className="bag icon"></span>
                    {
                        this.state.cartItems ?
                            <div className="circle">
                                <div className="circle-text">{ this.state.cartItems }</div>
                            </div> : ''
                    }
                </section>
            </header>
        );
    }
});
