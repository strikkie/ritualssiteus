var React = require('react'),
    AppAction = require('../actions/app.actions.js');

require('../../styles/cartItem.css');

module.exports = React.createClass({
    goToPrevScreen: function () {
        navigate('/');
    },
    render: function () {
        var item = this.props.item;
        var isSummary = this.props.summary;

        return (
            <div className="cart-item">
                <div className="item-data-container">
                    <img className={"picture " + (isSummary === "true" ? 'small-pic': '')} src={ item.picture } />
                    <div className="item-data">
                        <span className="name">{ item.name }</span>
                        <span className="size">
                            Size <span className="letter">{ item.size }</span>
                        </span>
                        { isSummary === "false" ? 
                            <span className="edit">Edit details</span> : 
                            <div className="summary">
                                <span className="">{ "Qty: " + item.quantity }</span>
                                <span className="">{ "Price: " + this.props.currency + item.price }</span>
                            </div>
                        }
                    </div>
                </div>

                { isSummary === "false" ?
                    <div className="actions">
                        <span className="remove"
                            onClick={ AppAction.removeItemFromCart.bind(this, item) }>
                            Remove
                        </span>
                        <div className="quantity">
                            <div className="circle">
                                <span className="minus icon"></span>
                            </div>
                            <span className="number" ref="quantity">
                                { item.quantity }
                            </span>
                            <div className="circle">
                                <span className="plus icon"></span>
                            </div>
                        </div>
                        <span className="price">{ this.props.currency + item.price }</span>
                    </div> : ''
                }
            </div>
        );
    }
});
