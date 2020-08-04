import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import './Jogs.scss'
import { getJogs } from '../../actions/jog'

const Jogs = ({
    jogs,
    getJogs
}) => {
    useEffect(() => {
        getJogs()
    }, [])
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
                                                            <div className="jogs-item__param-label">Date:</div>
                                                            <div className="jogs-item__param-value">
                                                                <Moment format="YYYY/MM/DD">
                                                                    { jog.date }
                                                                </Moment>
                                                            </div>
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
    jogs: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    jogs: state.jog.jogs
})

export default connect(mapStateToProps, { getJogs })(Jogs)
