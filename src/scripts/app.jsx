var React = require('react'),
    Reflux = require('reflux'),
    RouterMixin = require('react-mini-router').RouterMixin,
    RitualsHeader = require('./components/ritualsHeader.jsx');
    RitualsFooter = require('./components/ritualsFooter.jsx'),
    AppStore = require('stores/app.store.js'),
    AppAction = require('actions/app.actions.js'),
    navigate = require('react-mini-router').navigate,
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Configuration = require('./configuration.js');

require('../styles/main.css');

var ProductDetail = require('./components/productDetail.jsx'),
    Cart = require('./components/cart.jsx'),
    CheckoutLogin = require('./components/checkoutLogin.jsx'),
    Checkout = require('./components/checkout.jsx');

module.exports = React.createClass({
    mixins: [
        RouterMixin,
        Reflux.connect(
            AppStore,
            'configuration product cart'
        )
    ],
    routes: {
        '/': 'home',
        '/product-detail/:productId': 'productDetail',
        '/cart': 'cart',
        '/checkout-login': 'checkoutLogin',
        '/checkout': 'checkout'
    },
    componentDidMount: function () {
        this.setState({
            currentPath: this.state.path
        })
        AppAction.setMainRef(this.refs);
    },
    componentDidUpdate: function() {
        if ( this.state.currentPath != this.state.path ) {
            // Scroll to top when the path is changed and set the new path
            AppAction.scrollToTop();
            this.setState({
                currentPath: this.state.path
            });
        }
    },
    render: function () {
        var path = this.state.path.split('/'),
            displayFullFooter = path[1] == '' || path[1] == 'cart';

        return (
            <div className="view-container" ref="viewContainer">
                <RitualsHeader cart={ cart } />
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={ 500 }
                    transitionLeaveTimeout={ 500 }>
                        { this.renderCurrentRoute() }
                </ReactCSSTransitionGroup>
                <RitualsFooter displayFull={ displayFullFooter }/>
            </div>
        );
    },
    home: function () {
        var product = configuration.products[configuration.defaultProductId];

        return (product) ?
            <ProductDetail key={ this.state.path }
                    product={ product }
                    { ...configuration } />
                :
            <span>The product does not exists.</span>
    },
    productDetail: function (productId) {
        var product = configuration.products[productId];

        return (product) ?
            <ProductDetail key={ this.state.path }
                    product={ product }
                    { ...configuration } />
                :
            <span>The product does not exists.</span>
    },
    cart: function () {
        return <Cart key={ this.state.path }
                    { ...configuration }
                    cart={ cart }
                    product={ product } />;
    },
    checkoutLogin: function() {
        return <CheckoutLogin key={ this.state.path }
                    { ...configuration } />
    },
    checkout: function() {
        return <Checkout key={ this.state.path }
                    { ...configuration } />
    },
    // DO NOT REMOVE new route callback
    notFound: function (path) {
        return (
            <div key={ this.state.path } className="not-found">
                Page Not Found: {path}
            </div>
        );
    }
});

