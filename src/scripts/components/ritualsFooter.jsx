var React = require('react'),
    ShortFooterImg = require("../../images/short-footer.png"),
    FullFooterImg = require("../../images/full-footer.png");

require('../../styles/ritualsFooter.css');

module.exports = React.createClass({
    render: function () {
        var displayFullFooter = this.props.displayFull;

        return (
            <div className="rituals-footer">
                {
                    displayFullFooter ?
                        <img src={ FullFooterImg } /> :
                        <img src={ ShortFooterImg } />
                }
            </div>
        );
    }
});
