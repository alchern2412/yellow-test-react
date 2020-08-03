import React from 'react'
import PropTypes from 'prop-types'
import './Jogs.scss'

const Jogs = props => {
    const jogs = [
        {
            id: 938,
            user_id: "3",
            "distance": 941313,
            "time": 228,
            "date": 695851277
        },
        {
            id: 940,
            user_id: "3",
            "distance": 1224,
            "time": 134,
            "date": 1592535600
        },
        {
            id: 941,
            user_id: "3",
            "distance": 122,
            "time": 12,
            "date": 0
        },
        {
            id: 942,
            user_id: "3",
            "distance": 12,
            "time": 13,
            "date": 1591239600
        },
        {
            id: 943,
            user_id: "3",
            "distance": 12,
            "time": 13,
            "date": 1339632000
        },
        {
            id: 944,
            user_id: "3",
            "distance": 12,
            "time": 13,
            "date": 1560470400
        },
        {
            id: 946,
            user_id: "3",
            "distance": 12,
            "time": 14,
            "date": 1593475200
        }]

    return (
        <div className="jogs">
            <div className="jogs__filter">
                <div className="jogs__filter-item">
                    <div className="jogs__filter-label">Date from</div>
                    <div className="jogs__filter-input">
                        <input className="input" type="date" name="" id="" />
                    </div>
                </div>
                <div className="jogs__filter-item">
                    <div className="jogs__filter-label">Date to</div>
                    <div className="jogs__filter-input">
                        <input className="input" type="date" name="" id="" />

                    </div>
                </div>
            </div>
            <div className="jogs__list">
                {
                    jogs.map(jog => (
                        <div className="jogs-item">
                            <div className="jogs-item__icon">
                                <img src={ require('../../img/icon.png') } alt="Jog Icon" />
                            </div>
                            <div className="jogs-item__info">
                                <div className="jogs-item__date">{jog.time}</div>
                                <div className="jogs-item__params">
                                    <div className="jogs-item__param-label">Speed:</div>
                                    <div className="jogs-item__param-value">15</div>
                                </div>
                                <div className="jogs-item__params">
                                    <div className="jogs-item__param-label">Distance:</div>
                                    <div className="jogs-item__param-value">{jog.distance} km</div>
                                </div>
                                <div className="jogs-item__params">
                                    <div className="jogs-item__param-label">Time:</div>
                                    <div className="jogs-item__param-value">{jog.time} min</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="jogs-item">
                    <div className="jogs-item__icon">
                        <img src={ require('../../img/icon.png') } alt="Jog Icon" />
                    </div>
                    <div className="jogs-item__info">
                        <div className="jogs-item__date">20.12.2017</div>
                        <div className="jogs-item__params">
                            <div className="jogs-item__param-label">Speed:</div>
                            <div className="jogs-item__param-value">15</div>
                        </div>
                        <div className="jogs-item__params">
                            <div className="jogs-item__param-label">Distance:</div>
                            <div className="jogs-item__param-value">10 km</div>
                        </div>
                        <div className="jogs-item__params">
                            <div className="jogs-item__param-label">Time:</div>
                            <div className="jogs-item__param-value">60 min</div>
                        </div>
                    </div>
                </div>

                <div className="jogs-item">
                    <div className="jogs-item__icon">
                        <img src={ require('../../img/icon.png') } alt="Jog Icon" />
                    </div>
                    <div className="jogs-item__info">
                        <div className="jogs-item__date">20.12.2017</div>
                        <div className="jogs-item__params">
                            <div className="jogs-item__param-label">Speed:</div>
                            <div className="jogs-item__param-value">15</div>
                        </div>
                        <div className="jogs-item__params">
                            <div className="jogs-item__param-label">Distance:</div>
                            <div className="jogs-item__param-value">10 km</div>
                        </div>
                        <div className="jogs-item__params">
                            <div className="jogs-item__param-label">Time:</div>
                            <div className="jogs-item__param-value">60 min</div>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="jogs__add">

            </div>
        </div>
    )
}

Jogs.propTypes = {

}

export default Jogs
