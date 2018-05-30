var React = require('react');

require('../../styles/breadcrumb.css');

module.exports = React.createClass({
    render: function () {
        return (
            <p className="breadcrumb">
                { this.props.path.join(' / ') }
            </p>
        );
    }
});
