var React = require('react'),
    RelatedProductsItem = require('./relatedProductsItem.jsx'),
    dotsImg = require('../../images/dots.png');

require('../../styles/relatedProducts.css');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="related-products">
                <img className="dots" src={ dotsImg } />

                <p className="title">complete your ritual</p>

                <ul>
                    {
                        this.props.products ?

                            this.props.products.map(function (product, index) {
                                return (
                                    <RelatedProductsItem key={ index }
                                        product={ product }
                                        currency={ this.props.currency } />
                                )
                            }.bind(this)) : <li></li>
                    }
                </ul>
            </div>
        );
    }
});
