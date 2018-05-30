var React = require('react'),
    navigate = require('react-mini-router').navigate,
    AppAction = require('../actions/app.actions.js'),
    CheckoutDetail = require('./checkoutDetail.jsx'),
    CheckoutDelivery = require('./checkoutDelivery.jsx'),
    CheckoutPayment = require('./checkoutPayment.jsx'),
    RitualsButton = require('./ritualsButton.jsx'),
    OrderSummary = require('./orderSummary.jsx'),
    ApplePay = require('./applePay.jsx'),
    sectionChecked = require('../../images/checkout-check.png');

require('../../styles/checkout.css');

module.exports = React.createClass({
    getInitialState: function() {
        var cart = JSON.parse(localStorage.getItem("cart")),
            subTotal = 0;

        cart.map( function (product) {
            subTotal = parseFloat(subTotal) + parseFloat(product.price);
        });

        return {
            cart: cart,
            selectedTab: 2,
            showApplePay: false,
            subTotal: subTotal,
            shippingPrice: this.props.applePay.shipping.today
        }
    },
    calculateEstimatedTaxes: function () {
        var estimatedTaxPercentual = this.props.estimatedTaxPercentual,
            subTotal = this.state.subTotal;

        return ((subTotal * estimatedTaxPercentual) / 100).toFixed(2);
    },
    toggleApplePay: function (e) {
        e.preventDefault();
        e.stopPropagation();

        AppAction.scrollToTop();

        this.setState({
            showApplePay: !this.state.showApplePay
        });

        AppAction.toggleScrolling();
    },
    submitApplePay: function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Add action on submit

        this.setState({
            showApplePay: false
        });

        AppAction.clearCart();
        AppAction.toggleScrolling();
    },
    nextToDelivery: function() {
        AppAction.scrollToTop();
        this.setState({
            selectedTab: 2
        });
    },
    nextToPayment: function() {
        AppAction.scrollToTop();
        this.setState({
            selectedTab: 3
        });
    },
    setShippingPrice: function(price, days) {
        this.setState({
            shippingPrice: price,
            shippingDays: days
        });
    },
    render: function () {
        var applePay = this.props.applePay,
            estimatedTax = '0',
            shippingPrice = '0',
            estimatedTax = this.calculateEstimatedTaxes();

        return (
            <div className="checkout">
                <h1 className="title">CHECKOUT</h1>
                <div className="accordion-wrapper">
                    <div className="container details">
                        <div className={"title-bar " + (this.state.selectedTab === 1 ? '' : 'minimized')}>
                            <h2 className="title">1. DETAILS</h2>
                            { this.state.selectedTab > 1 ? <img className="check-icon" src={ sectionChecked } /> : '' }
                        </div>
                        <div className={"content " + (this.state.selectedTab === 1 ? '' : 'hidden')}>
                            <CheckoutDetail defaultData={ this.props.applePay.customer }/>
                            <RitualsButton
                                text="NEXT STEP"
                                type="submit"
                                callback={ this.nextToDelivery } />
                        </div>
                    </div>
                    <div className="container delivery">
                        <div className={"title-bar " + (this.state.selectedTab === 2 ? '' : 'minimized')}>
                            <h2 className="title">2. DELIVERY</h2>
                            { this.state.selectedTab > 2 ? <img className="check-icon" src={ sectionChecked } /> : '' }
                        </div>
                        <div className={"content " + (this.state.selectedTab === 2 ? '' : 'hidden')}>
                            <CheckoutDelivery defaultData={ this.props.applePay.customer } shipping={ this.props.applePay.shipping } 
                                currency={ this.props.currency } callback={ this.setShippingPrice }/>
                            <RitualsButton
                                text="NEXT STEP"
                                type="submit"
                                callback={ this.nextToPayment } />
                        </div>
                    </div>
                    <div className="container payment">
                        <div className={"title-bar " + (this.state.selectedTab === 3 ? '' : 'minimized')}>
                            <h2 className="title">3. PAYMENT</h2>
                        </div>
                        <div className={"content " + (this.state.selectedTab === 3 ? '' : 'hidden')}>
                            <CheckoutPayment />
                            <RitualsButton
                                text="PAY NOW"
                                type="submit"
                                callback={ this.toggleApplePay } />
                        </div>
                    </div>
                    <div className="contact-info">
                        <h4 className="title">CUSTOMER SERVICE</h4>
                        <span>+49 (0) 52415275000</span>
                        <span className="secure">Secure checkout</span>
                    </div>
                    { this.state.selectedTab > 1 ? <OrderSummary shippingInfo={ this.props.applePay } currency={ this.props.currency }
                        shippingPrice={ this.state.shippingPrice } /> : ''}
                </div>
                <ApplePay
                    { ...applePay }
                    show={ this.state.showApplePay }
                    currency={ this.props.currency }
                    subTotal={ this.state.subTotal }
                    estimatedTax= { estimatedTax }
                    shippingPrice= { this.state.shippingPrice }
                    shippingDays= { this.state.shippingDays }
                    onCloseCallback = { this.toggleApplePay }
                    onSubmitCallback = { this.submitApplePay }/>
            </div>
        );
    }
});
