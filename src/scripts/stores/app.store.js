var Reflux = require('reflux'),
    Lodash = require('lodash'),
    Configuration = require('../configuration.js');

var AppStore = Reflux.createStore({
    listenables: require('actions/app.actions.js'),
    init: function () {
        console.log('AppStore initialized');
        // This function will be called when the store will be first initialized
        configuration = Configuration;
        product = JSON.parse(localStorage.getItem("product")) || null;
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        mainRef = {};

        this.trigger(product);
        this.trigger(cart);
    },
    onSetProduct: function (selectedProduct) {
        product = selectedProduct;
        this.trigger(product);
        localStorage.setItem('product', JSON.stringify(product));
    },
    onSetProductSize: function (size) {
        product.size = size;
        this.trigger(product);
        localStorage.setItem('product', JSON.stringify(product));
    },
    onAddToCart: function (product) {
        product.quantity = 1;
        cart.push(product);
        this.trigger(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    onRemoveItemFromCart: function (product) {
        Lodash.remove(cart, function(item) {
            return item.id == product.id;
        });

        this.trigger(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    onToggleScrolling: function () {
        document.body.classList.toggle('disable-scrolling');
    },
    onResetDemo: function () {
        configuration = Configuration;
        product.size = '';
        // Clear Cart
        this.onClearCart();
    },
    onSetMainRef: function (ref) {
        // Add ref to the mainRef object to store components refs and be
        // able to handle them from the store
        this.mainRef = Lodash.merge(mainRef, ref);
    },
    onScrollToTop: function () {
        if ( this.mainRef ) {
            // Scroll view container to top
            this.mainRef.viewContainer.scrollTo(0,0);
        }
    },
    onClearCart: function () {
        cart = [];
        this.trigger(cart);
        localStorage.removeItem('cart');
    }
});

module.exports = AppStore;
