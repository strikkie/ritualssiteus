var React = require('react'),
    CarrouselImg = require('../../images/carrousel.png');

require('../../styles/carrousel.css');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="carrousel">
                <img src={ CarrouselImg } />
            </div>
        );
    }
});
