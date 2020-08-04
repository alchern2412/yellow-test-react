import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Jogs.scss'

const Jogs = props => {
    // const jogs = [
    //     {
    //         id: 938,
    //         user_id: "3",
    //         "distance": 941313,
    //         "time": 228,
    //         "date": 695851277
    //     },
    //     {
    //         id: 940,
    //         user_id: "3",
    //         "distance": 1224,
    //         "time": 134,
    //         "date": 1592535600
    //     },
    //     {
    //         id: 941,
    //         user_id: "3",
    //         "distance": 122,
    //         "time": 12,
    //         "date": 0
    //     },
    //     {
    //         id: 942,
    //         user_id: "3",
    //         "distance": 12,
    //         "time": 13,
    //         "date": 1591239600
    //     },
    //     {
    //         id: 943,
    //         user_id: "3",
    //         "distance": 12,
    //         "time": 13,
    //         "date": 1339632000
    //     },
    //     {
    //         id: 944,
    //         user_id: "3",
    //         "distance": 12,
    //         "time": 13,
    //         "date": 1560470400
    //     },
    //     {
    //         id: 946,
    //         user_id: "3",
    //         "distance": 12,
    //         "time": 14,
    //         "date": 1593475200
    //     }]
    const jogs = []

    return (
        <div className="jogs">
            {
                jogs.length > 0
                    ? (
                        <>
                            <div className="content">
                                <div className="jogs__wrapper">
                                    <div className="jogs__filter">
                                        <div className="jogs__filter-item">
                                            <div className="jogs__filter-label">Date from</div>
                                            <div className="jogs__filter-input">
                                                <input className="input" type="date" name="dateFrom" />
                                            </div>
                                        </div>
                                        <div className="jogs__filter-item">
                                            <div className="jogs__filter-label">Date to</div>
                                            <div className="jogs__filter-input">
                                                <input className="input" type="date" name="dateTo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jogs__list">
                                        {
                                            jogs.map(jog => (
                                                <div key={ jog.id } className="jogs-item">
                                                    <div className="jogs-item__icon">
                                                        <img src={ require('../../img/icon.png') } alt="Jog Icon" />
                                                    </div>
                                                    <div className="jogs-item__info">
                                                        <div className="jogs-item__date">{ jog.time }</div>
                                                        <div className="jogs-item__params">
                                                            <div className="jogs-item__param-label">Speed:</div>
                                                            <div className="jogs-item__param-value">15</div>
                                                        </div>
                                                        <div className="jogs-item__params">
                                                            <div className="jogs-item__param-label">Distance:</div>
                                                            <div className="jogs-item__param-value">{ jog.distance } km</div>
                                                        </div>
                                                        <div className="jogs-item__params">
                                                            <div className="jogs-item__param-label">Time:</div>
                                                            <div className="jogs-item__param-value">{ jog.time } min</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>

                                    <Link to="/add-jog">
                                        <div className="jogs__add"></div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <div className="jogs__empty">
                            <div className="jogs__empty-info">
                                <div className="jogs__empty-info-logo"></div>
                                <div className="jogs__empty-info-text">Nothing is there</div>
                            </div>
                            <Link to="/add-jog">
                                <button className="btn jogs__empty-btn" type="submit">Create your jog first</button>
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

Jogs.propTypes = {

}

export default Jogs
