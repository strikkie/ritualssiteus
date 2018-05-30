var React = require('react'),
    navigate = require('react-mini-router').navigate,
    RitualsButton = require('./ritualsButton.jsx'),
    RelatedProducts = require('./relatedProducts.jsx'),
    CartItem = require('./cartItem.jsx'),
    ApplePay = require('./applePay.jsx');

require('../../styles/cart.css');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            cart: null,
            subTotal: 0,
            showApplePay: false
        };
    },
    componentDidMount: function () {
        this.calculateSubtotal();
    },
    goTo: function (path) {
        navigate(path);
    },
    calculateSubtotal: function () {
        var cart = this.props.cart,
            subTotal = 0;

        cart.map( function (product) {
            subTotal = parseFloat(subTotal) + parseFloat(product.price);
        });

        this.setState({
            subTotal: subTotal.toFixed(2)
        });
    },
    calculateTotal: function () {
        var total = parseFloat(this.state.subTotal) + this.props.applePay.shipping.today;
        return total.toFixed(2);
    },
    submitApplePay: function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Add action on submit

        this.setState({
            showApplePay: false
        });
    },
    componentWillMount: function () {
        var cart = localStorage.getItem("cart");

        this.setState({
            cart: JSON.parse(cart)
        });
    },
    componentWillReceiveProps: function (nextProps) {
        var cart = localStorage.getItem("cart");

        this.setState({
            cart: JSON.parse(cart)
        });
    },
    render: function () {
        var gift = this.props.gift,
            premiumGift = this.props.premiumGift,
            applePay = this.props.applePay,
            currency = this.props.currency,
            subTotal = this.state.subTotal,
            product = this.props.product;

        return (
            <div className="cart-screen">
                <section className="cart">
                    <p className="title">your cart</p>

                    {
                        this.state.cart ? 
                            this.state.cart.map(function (item, index) {
                                return (
                                    <CartItem key={ index }
                                        item={ item }
                                        summary="false"
                                        currency={ this.props.currency } />
                                );
                            }.bind(this)) : null
                    }
                </section>

                <section className="gift">
                    <p className="title">your gift</p>

                    <div className="gift-data">
                        <img src={ gift.picture } />
                        <span className="gift-name">{ gift.name }</span>
                    </div>

                    <div className="gift-data">
                        <img src={ premiumGift.picture } />
                        
                        <div className="content">
                            <span className="premium-gift-name">Premium gift</span>
                            <p className="premium-gift-description">
                                spend { this.props.currency }17,60 more and choose from the premium gift.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <p className="add-giftwrapping">
                        Add giftwrapping / Personal message <input type="checkbox" />
                    </p>
                    <p className="coupon-code">
                        <input type="text" placeholder="Enter coupon code" />
                        <span className="plus">+</span>
                    </p>
                </section>

                <section className="subtotal-total">
                    <div className="subs">
                        <div className="subtotal">
                            <span className="label">subtotal</span>
                            <span className="value">{ this.props.currency + this.state.subTotal }</span>
                        </div>
                        <div className="shipping-post">
                            <span className="label">shipping hermesuk</span>
                            <span className="value">{ this.props.currency + applePay.shipping.today.toFixed(2) }</span>
                        </div>
                    </div>
                    <div className="estimated-total">
                        <span className="label">estimated total</span>
                        <span className="value">{ this.props.currency + this.calculateTotal() }</span>
                    </div>
                </section>

                <RitualsButton
                    text="checkout"
                    type="submit"
                    class="add-to-cart"
                    callback={ this.goTo.bind(this, '/checkout-login') } />

                <p className="secure-checkout">
                    <span className="lock icon"></span>
                    <span>Secure checkout</span>
                </p>

                <p className="return-to-shopping"
                    onClick={ this.goTo.bind(this, '/product-detail/' + this.props.product.id) }>
                    Return to shopping
                </p>

                <RelatedProducts
                    products={ product.relatedProducts }
                    currency={ this.props.currency } />
            </div>
        );
    }
});
