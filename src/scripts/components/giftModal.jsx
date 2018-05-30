var React = require('react'),
    AppAction = require('../actions/app.actions.js'),
    navigate = require('react-mini-router').navigate,
    RitualsButton = require('./ritualsButton.jsx');

require('../../styles/giftModal.css');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            show: false
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({show: nextProps.show});
    },
    enableScrolling: function () {
        AppAction.toggleScrolling();
    },
    goTo: function () {
        this.closeModal();
        this.props.callback();
    },
    closeModal: function () {
        this.enableScrolling();
        this.setState({ show: false });
    },
    render: function () {
        var gift = this.props.gift;

        return (
            <div className={"gift-modal " + (this.state.show ? '': 'hidden')}>
                <div className="modal-overlay"></div>

                <div className="modal-wrapper">
                    <span className="close icon" onClick={this.closeModal}></span>
                    <h1 className="title">congratulations!</h1>
                    <p className="content">
                        We have added a free { gift.name } to your shopping cart.
                    </p>

                    <img className="picture" src={ gift.picture } />

                    <div className="action-bar">
                        <RitualsButton
                            text="go to cart"
                            type="submit"
                            callback={ this.goTo } />
                        <RitualsButton
                            text="return to shopping"
                            type="cancel"
                            callback={ this.closeModal } />

                    </div>

                    <p className="premium-gift">Interested in a different gift? View available options in your shopping cart.</p>
                </div>
            </div>
        );
    }
});
