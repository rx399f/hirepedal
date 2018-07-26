import React, { Component } from 'react';

class UpcomingBookings extends Component {

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {


        return (
            <div className="col-5">
                <div className="mdl-color--white mdl-shadow--2dp op-card mb-4">
                    <h4 className="op-card-heading">UPCOMING BOOKING</h4>
                    <div className="clearfix"></div>
                    <div className="table-responsive">
                        <table className="mdl-data-table mdl-js-data-table table mb-0">
                            <thead>
                                <tr>
                                    <th className="mdl-data-table__cell--non-numeric">Date</th>
                                    <th className="mdl-data-table__cell--non-numeric">Time</th>
                                    <th className="mdl-data-table__cell--non-numeric">Pickup Point</th>
                                    <th className="mdl-data-table__cell--non-numeric">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric">27/05/2018</td>
                                    <td className="mdl-data-table__cell--non-numeric">10:00 AM</td>
                                    <td className="mdl-data-table__cell--non-numeric">Jaipur</td>
                                    <td className="mdl-data-table__cell--non-numeric"><img src="../images/cycle_icon.png" alt="HirePedal" className="op-c-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric"></td>
                                    <td className="mdl-data-table__cell--non-numeric">11:00 AM</td>
                                    <td className="mdl-data-table__cell--non-numeric">Udaipur</td>
                                    <td className="mdl-data-table__cell--non-numeric"><img src="../images/cycle_icon.png" alt="HirePedal" className="op-c-icon" /><img alt="HirePedal" src="../images/cycle_icon.png" className="op-c-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric"></td>
                                    <td className="mdl-data-table__cell--non-numeric">02:30 PM</td>
                                    <td className="mdl-data-table__cell--non-numeric">Jodhpur</td>
                                    <td className="mdl-data-table__cell--non-numeric"><img src="../images/cycle_icon.png" alt="HirePedal" className="op-c-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric">28/05/2018</td>
                                    <td className="mdl-data-table__cell--non-numeric">10:00 AM</td>
                                    <td className="mdl-data-table__cell--non-numeric">Jaipur</td>
                                    <td className="mdl-data-table__cell--non-numeric"><img src="../images/cycle_icon.png" alt="HirePedal" className="op-c-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric"></td>
                                    <td className="mdl-data-table__cell--non-numeric">11:00 AM</td>
                                    <td className="mdl-data-table__cell--non-numeric">Udaipur</td>
                                    <td className="mdl-data-table__cell--non-numeric"><img src="../images/cycle_icon.png" alt="HirePedal" className="op-c-icon" /><img alt="HirePedal" src="../images/cycle_icon.png" className="op-c-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric">31/05/2018</td>
                                    <td className="mdl-data-table__cell--non-numeric">10:00 AM</td>
                                    <td className="mdl-data-table__cell--non-numeric">Jaipur</td>
                                    <td className="mdl-data-table__cell--non-numeric"><img src="../images/cycle_icon.png" alt="HirePedal" className="op-c-icon" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-button--accent float-right"> View all </button>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default UpcomingBookings;