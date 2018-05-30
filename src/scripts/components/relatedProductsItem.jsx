var React = require('react'),
    AppAction = require('../actions/app.actions.js'),
    RitualsButton = require('./ritualsButton.jsx');

require('../../styles/relatedProductsItem.css');

module.exports = React.createClass({
    render: function () {
        var product = this.props.product;

        return (
            <li className="related-products-item" key={ this.props.key }>
                <img className="item-picture" src={ product.picture } />

                <div className="item-data">
                    <span className="name">{ product.name }</span>
                    <span className="price">{ this.props.currency + ' ' + product.price }</span>
                    <RitualsButton
                        text="add to cart"
                        type="submit"
                        class="add-to-cart related-product"
                        callback={ AppAction.addToCart.bind(this, this.props.product) } />
                </div>
            </li>
        );
    }
});

