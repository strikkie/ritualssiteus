var React = require('react'),
    navigate = require('react-mini-router').navigate,
    CartItem = require('./cartItem.jsx');

require('../../styles/orderSummary.css');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            cart: null,
            subtotal: 0,
            shipping: 0,
            total: 0
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            shipping: nextProps.shippingPrice,
            total: this.state.subtotal + nextProps.shippingPrice
        });
    },
    componentWillMount: function () {
        var cart = localStorage.getItem("cart"),
            subTotal = 0,
            shippingPrice = this.props.shippingPrice;

        JSON.parse(cart).map( function (product) {
            subTotal = parseFloat(subTotal) + parseFloat(product.price);
        });

        this.setState({
            cart: JSON.parse(cart),
            subtotal: subTotal,
            shipping: shippingPrice,
            total: subTotal + shippingPrice
        });
    },
    render: function () {
        var defaultData = this.props.defaultData,
            shippingInfo = this.props.shippingInfo;

    return (
        <div className="order-summary">
            <div className="title-bar">
                <h2 className="title">ORDER SUMMARY</h2>
                <span className="edit">Edit</span>
            </div>
            <div className="products">
                {
                    this.state.cart.map(function (item, index) {
                        return (
                            <CartItem key={ index }
                                item={ item }
                                currency={ this.props.currency }
                                summary="true" />
                        );
                    }.bind(this))
                }
            </div>
            <div className="subtotal">
                <div className="row">
                    <h4 className="title">SUBTOTAL</h4>
                    <span className="price">{this.props.currency + this.state.subtotal.toFixed(2) }</span>
                </div>
                <div className="row">
                    <h4 className="title">SHIPPING UPS</h4>
                    <span className="price">{this.props.currency + this.state.shipping.toFixed(2) }</span>
                </div>
                <div className="row">
                    <h4 className="title">ORDER TOTAL</h4>
                    <span className="price">{this.props.currency + this.state.total.toFixed(2) }</span>
                </div>
            </div>
            <div className="title-bar">
                <h2 className="title">SHIPPING ADDRESS</h2>
                <span className="edit">Edit</span>
            </div>
            <div className="shipping-info">
                <label>{ shippingInfo.customer.firstName + ' ' + shippingInfo.customer.lastName }</label>
                <label>{ shippingInfo.shipping.address }</label>
                <label>{ shippingInfo.shipping.address2 }</label>
                <label>{ shippingInfo.customer.country }</label>
                <label>{ "METHOD: " + shippingInfo.shipping.method }</label>
            </div>
        </div>
    );
    }
});
