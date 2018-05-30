var React = require('react'),
    navigate = require('react-mini-router').navigate,
    Moment = require('moment');

require('../../styles/checkoutDelivery.css');

module.exports = React.createClass({
    setShippingPrice: function(price, days) {
        this.props.callback(price, days);
    },
    render: function () {
        var defaultData = this.props.defaultData,
            shipping = this.props.shipping;

        return (
            <div className="checkoutDelivery">
                <h3 className="title">SHIPPING ADDRESS</h3>
                <div className="resume">
                    <div className="row">
                        <label>{ defaultData.firstName + " " + defaultData.lastName }</label>
                        <label className="action">Change</label>
                    </div>
                    <div className="row">
                        <label>{ defaultData.street }</label>
                        <label className="action">address details</label>
                    </div>
                    <label className="row">{ defaultData.city + ", " + defaultData.zipCode }</label>
                    <label className="row">{ defaultData.country }</label>
                </div>
                    {/* <h3 className="title">DELIVERY MOMENT</h3>
                    <div className="delivery-options">
                        <div className="option-wrapper">
                            <div className="row">
                                <div className="radio-container">
                                    <input type="radio" name="deliveryDate" className="radio" defaultChecked
                                        onClick={ this.setShippingPrice.bind(this, shipping.today, 0) }/>
                                    <label>{"PostNL - " + Moment().format('dddd, Do MMMM')}</label>
                                </div>
                                <label className="price">{ this.props.currency + shipping.today.toFixed(2) }</label>
                            </div>
                            <label className="time-range">10:00 - 12:30</label>
                        </div>
                        <div className="option-wrapper">
                            <div className="row">
                                <div className="radio-container">
                                    <input type="radio" name="deliveryDate" className="radio"
                                        onClick={ this.setShippingPrice.bind(this, shipping.threeDays, 3) }/>
                                    <label>{"PostNL - " + Moment().add(3, 'days').format('dddd, Do MMMM')}</label>
                                </div>
                                <label className="price">{ this.props.currency + shipping.threeDays.toFixed(2) }</label>
                            </div>
                            <label className="time-range">18:00 - 22:00</label>
                        </div>
                        <label className="action">Select another delivery moment</label>
                    </div>
                    <h3 className="title">OR CHOOSE A PICKUP POINT</h3>
                    <div className="delivery-options">
                        <div className="option-wrapper no-underline">
                            <div className="row">
                                <div className="radio-container">
                                    <input type="radio" name="deliveryDate" className="radio"
                                        onClick={ this.setShippingPrice.bind(this, shipping.pickUp, -1) }/>
                                    <label>Choose a pickup point nearby</label>
                                </div>
                                <label className="price">{ this.props.currency + shipping.pickUp.toFixed(2) }</label>
                            </div>
                        </div>
                    </div> */}
                <p className="terms">By placing an order you are agreeing to the content of our <span className="link">terms and conditions</span>.
                We process your personal data in accordance with our <span className="link">privacy policy</span>.</p>
            </div>
        );
    }
});
