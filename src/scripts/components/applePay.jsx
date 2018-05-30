var React = require('react'),
    Moment = require('moment'),
    AppAction = require('../actions/app.actions.js'),
    ApplePayLogoImg = require("../../images/apple-pay-logo.svg"),
    CreditCardImg = require("../../images/credit-card.jpg"),
    ChevronRightImg = require("../../images/chevron-right.png"),
    ApplePayAnimGif = require("../../images/pay-anim-transparent.gif"),
    ApplePayFaceId = require("../../images/face-id.gif");

require('../../styles/applePay.css');

module.exports = React.createClass({
    componentDidMount: function () {
        AppAction.scrollToTop();
    },
    calculateDeliveryDate: function () {
        var props = this.props,
            deliveryDate = props.shippingDays <= 0 ?
            Moment().format('MMM D') :
            Moment().add(this.props.shippingDays, 'days').format('MMM D');

        return deliveryDate;
    },
    calculateTotal: function () {
        var props = this.props,
            total = parseFloat(props.subTotal) + parseFloat(props.shippingPrice) + parseFloat(props.estimatedTax);

        return total;
    },
    getCurrencyString: function (currency, value) {
        return (currency.trim() == "€") ? value + ' ' + currency : currency + ' ' + value;
    },
    render: function () {
        var props = this.props,
            show = props.show,
            mainClassName = show ? "apple-pay" : "apple-pay hidden",
            containerClassName = show ? "ap-container slide-up" : "ap-container slide-down";

        return (
            <div className={ mainClassName }>
                <div className={ containerClassName }>
                    <div className="ap-header">
                        <img src={ ApplePayLogoImg } className="apple-pay-logo" />
                        <span className="highlight action ap-cancel" onClick={ props.onCloseCallback }>
                            Cancel
                        </span>
                    </div>
                    <div className="ap-content">
                        <div className="info-row">
                            <div className="label">
                                <img src={ CreditCardImg } className="credit-card" />
                            </div>
                            <div className="description">
                                <p>
                                    <span className="card-name">
                                        {
                                            props.creditCardName
                                        }
                                    </span>
                                    <span>&nbsp;(&#8226;&#8226;&#8226;&#8226;</span>
                                    <span className="card-number">
                                        {
                                           props.creditCardNumber
                                        }
                                    </span>
                                    <span>)</span>
                                </p>
                                <p className="card-address">
                                    {
                                        props.creditCardAddress
                                    }
                                </p>
                            </div>
                            <div className="action">
                                <img src={ ChevronRightImg } />
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="label">
                                SHIPPING
                            </div>
                            <div className="description">
                                <p className="shipping-name">
                                    {
                                        props.customer.firstName + ' ' + props.customer.lastName
                                    }
                                </p>
                                <p className="shipping-address">
                                    {
                                        props.shipping.address
                                    }
                                </p>
                                <p className="shipping-address-2">
                                    {
                                        props.shipping.address2
                                    }
                                </p>
                                <p className="shipping-country">
                                    {
                                        props.customer.country
                                    }
                                </p>
                            </div>
                            <div className="action">
                                <img src={ ChevronRightImg } />
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="label">
                                METHOD
                            </div>
                            <div className="description">
                                <p className="shipping-method">
                                    {
                                        props.shipping.method
                                    }
                                </p>
                                <p className="shipping-delivery">
                                    Delivers:&nbsp;
                                    {
                                        this.calculateDeliveryDate()
                                    }
                                </p>
                            </div>
                            <div className="action">
                                <img src={ ChevronRightImg } />
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="label">
                                CONTACT
                            </div>
                            <div className="description">
                                <p id="apple-pay-email" className="email new-line">
                                    {
                                        props.customer.email
                                    }
                                </p>
                                <p id="apple-pay-phone" className="phone new-line">
                                    {
                                        props.customer.phone
                                    }
                                </p>
                            </div>
                            <div className="action">
                                <img src={ ChevronRightImg } />
                            </div>
                        </div>
                        <div className="info-row">
                            <div className="label"></div>
                            <div className="totals">
                                 <div className="total-label">
                                     BAG SUBTOTAL
                                 </div>
                                 <div id="apple-pay-subtotal" className="total-value sub-total">
                                    {
                                        this.getCurrencyString(props.currency, props.subTotal.toFixed(2))
                                    }
                                 </div>
                                 <div className="total-label">
                                     FREE SHIPPING
                                 </div>
                                 <div className="total-value shipping-price">
                                    {
                                        this.getCurrencyString(props.currency, props.shippingPrice.toFixed(2))
                                    }
                                 </div>
                                 {/* <div className="total-label">
                                     ESTIMATED TAX
                                 </div>
                                 <div id="apple-pay-estimated-tax" className="total-value estimated-tax">
                                    {
                                        this.getCurrencyString(props.currency, props.estimatedTax)
                                    }
                                 </div> */}
                                 <div className="total-label total-pay">
                                     PAY APPLE
                                 </div>
                                 <div id="apple-pay-total" className="total-value total">
                                    {
                                        this.getCurrencyString(props.currency, this.calculateTotal().toFixed(2))
                                    }
                                 </div>
                            </div>
                        </div>
                        <div className="fingerprint-row" onClick={ props.onSubmitCallback }>
                            {
                                props.show ? 
                                    <div className="apple-pay-gif">
                                        <img className="finger-print" src={ ApplePayAnimGif } />
                                        <img className="face-id" src={ ApplePayFaceId } />
                                    </div>:
                                    <span></span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
