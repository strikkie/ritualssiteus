var React = require('react'),
    navigate = require('react-mini-router').navigate,
    paymentSection = require('../../images/checkout-payment.png');

require('../../styles/checkoutPayment.css');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="checkoutPayment">
                <img src={ paymentSection } /> 
            </div>
        );
    }
});
