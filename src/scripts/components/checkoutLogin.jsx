var React = require('react'),
    navigate = require('react-mini-router').navigate,
    RitualsButton = require('./ritualsButton.jsx');

require('../../styles/checkoutLogin.css');

module.exports = React.createClass({
    goTo: function () {
        navigate('/checkout')
    },
    render: function () {
        return (
            <div className="checkout-login">
                <div className="sign-up container">
                    <h2 className="title">Sign Up</h2>
                    <p>You can create an account using one of your social media profiles.</p>

                    <RitualsButton
                        text="Sign up with Facebook"
                        type="checkout-login-btn"
                        class="facebook"
                        callback={ this.goTo } />
                    <RitualsButton
                        text="Sign up with Google"
                        type="checkout-login-btn"
                        class="google" />
                </div>
                <div className="guest container">
                    <h2 className="title">Don't have an account?</h2>
                    <p>You can check out without creating an account. You'll have a chance to create an account later.</p>

                    <RitualsButton
                        text="Continue as guest"
                        type="checkout-login-btn"
                        class="checkout-guest" />
                </div>
                <div className="username container">
                    <h2 className="title">Returning customers</h2>
                    <p>If you are a registered user, please enter your email and password.</p>

                    <div>
                        <label>Email address *</label>
                        <input type="text" />
                    </div>
                    <div className="password-container">
                        <label>Password *</label>
                        <span className="forgot-password">Forgot password?</span>
                        <input type="text" />
                    </div>
                    <div className="remember-me-container">
                        <input type="checkbox" />
                        <label className="remember-me">Remember me</label>
                    </div>

                    <RitualsButton
                        text="Login"
                        type="checkout-login-btn"
                        class="login" />

                    <div className="contact-info">
                        <h4 className="customer-service">CUSTOMER SERVICE</h4>
                        <span>+49 (0) 52415275000</span>
                        <span className="secure">Secure checkout</span>
                    </div>
                </div>
            </div>
        );
    }
});
