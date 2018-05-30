var React = require('react'),
    AppAction = require('../actions/app.actions.js'),
    navigate = require('react-mini-router').navigate,
    Breadcrumb = require('./breadcrumb.jsx'),
    Carrousel = require('./carrousel.jsx'),
    SizePicker = require('./sizePicker.jsx'),
    RitualsButton = require('./ritualsButton.jsx'),
    RelatedProducts = require('./relatedProducts.jsx'),
    GiftModal = require('./giftModal.jsx'),
    Loading = require('./loading.jsx');

require('../../styles/productDetail.css');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            showModal: false,
            loader: false
        }
    },
    componentDidMount: function () {
        AppAction.setProduct(this.props.product);
    },
    addToCart: function() {
        AppAction.addToCart(this.props.product);
        AppAction.toggleScrolling();
        this.setState({ loader: true });
        setTimeout(function(){
            this.setState({ loader: false });
            this.setState({ showModal: true });
        }.bind(this), 500);
    },
    goToCart: function() {
        this.setState({ loader: true });
        setTimeout(function(){
            this.setState({ loader: false });
            navigate('/cart');
        }.bind(this), 500);
    },
    render: function () {
        var pathArray = ["home", "clothing", "women's clothing", "ladies yoga wear"],
            props = this.props,
            product = props.product,
            currency = props.currency;

        return (
            <div className="product-detail">
                <Loading display={ this.state.loader }/>
                <Breadcrumb path={ pathArray } />
                <Carrousel />

                <h1 className="product-name">{ product.name }</h1>
                <p className="category">{ product.category }</p>
                <p className="price-sales">{ currency }{ product.price }</p>

                <SizePicker product={ product } />

                {
                    product.size ?
                        <RitualsButton
                            text="add to cart"
                            type="submit"
                            class="add-to-cart"
                            callback={ this.addToCart } /> :
                        <RitualsButton
                            text="Select size"
                            type="disabled"
                            class="select-size" />
                }

                <a className="check-instore-availabilty" href="javascript:void(0);">
                    <span className="icon-cities"></span>
                    Check instore availability
                </a>

                <div className="container">
                    <div className="accordion">
                        <div className="title-container">
                            <p className="title">description</p>
                            <span className="icon expanded"></span>
                        </div>

                        <p className="content">{ product.description }</p>
                        
                        <div className="details">
                            <p>Product details</p>
                            <ul>
                                {
                                    product.details.map(function (detail, index) {
                                        return (
                                            <li key={ index }>{ detail.type + ': ' + detail.value }</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title-container">
                            <p className="title">instructions</p>
                            <span className="icon expand"></span>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title-container">
                            <p className="title">composition</p>
                            <span className="icon expand"></span>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title-container">
                            <p className="title">shipping and return</p>
                            <span className="icon expand"></span>
                        </div>
                    </div>
                </div>

                <RelatedProducts
                        products={ product.relatedProducts }
                        currency={ this.props.currency } />

                <div className="container"></div>

                <GiftModal show={ this.state.showModal } gift={ this.props.gift } callback={ this.goToCart } />
            </div>
        );
    }
});

