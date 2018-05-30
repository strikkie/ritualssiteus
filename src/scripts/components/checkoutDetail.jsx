var React = require('react'),
    navigate = require('react-mini-router').navigate;

require('../../styles/checkoutDetail.css');

module.exports = React.createClass({
    render: function () {
        var defaultData = this.props.defaultData;

        return (
            <div className="checkoutDetail">
                <h3 className="title">SHIPPING ADDRESS</h3>
                <form>
                    <label className="label">Title *</label>
                    <input type="text" className="input" defaultValue={defaultData.title}/>

                    <label className="label">First name *</label>
                    <input type="text" className="input" defaultValue={defaultData.firstName} />

                    <label className="label">Last name *</label>
                    <input type="text" className="input" defaultValue={defaultData.lastName}/>

                    <label className="label">Country *</label>
                    <input type="text" className="input" defaultValue={defaultData.country}/>

                    <label className="label">ZIP code *</label>
                    <input type="text" className="input" defaultValue={defaultData.zipCode}/>

                    <label className="label">House number *</label>
                    <input type="text" className="input" defaultValue={defaultData.houseNumber}/>

                    <label className="label">House number extension *</label>
                    <input type="text" className="input" defaultValue={defaultData.houseNumberExtension}/>

                    <label className="label">Street *</label>
                    <input type="text" className="input" defaultValue={defaultData.street}/>

                    <label className="label">City *</label>
                    <input type="text" className="input" defaultValue={defaultData.city}/>

                    <label className="label">Phone *</label>
                    <input type="text" className="input phone" defaultValue={defaultData.phone}/>
                    <span className="example">Example: +31612345678</span>

                    <label className="label">Email *</label>
                    <input type="text" className="input" defaultValue={defaultData.email}/>

                    <label className="label">Confirm email *</label>
                    <input type="text" className="input" defaultValue={defaultData.email}/>

                    <input type="checkbox" defaultChecked/> <label className="check">Use this address for billing.</label>
                </form>
            </div>
        );
    }
});
