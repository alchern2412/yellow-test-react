import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import './Jogs.scss'
import { getJogs, setJogsLoading, setFilter } from '../../actions/jog'
import { Loader } from '../../components/Loader/Loader'

export const Jogs = ({
    jogs,
    loading,
    filter,
    getJogs,
    setJogsLoading,
    setFilter
}) => {
    useEffect(() => {
        getJogs()
        return () => setJogsLoading(true)
    }, [getJogs, setJogsLoading])

    const onChange = (e) => {
        const { name, value } = e.target
        setFilter(name, value)
    }
    return (
        <div className="jogs">
            <div className="content">
                <div className="jogs__wrapper">
                    {
                        filter.filter && <div className="jogs__filter">
                            <div className="jogs__filter-item">
                                <div className="jogs__filter-label">Date from</div>
                                <div className="jogs__filter-input">
                                    <input value={ filter.dateFrom } onChange={ onChange } className="input" type="date" name="dateFrom" />
                                </div>
                            </div>
                            <div className="jogs__filter-item">
                                <div className="jogs__filter-label">Date to</div>
                                <div className="jogs__filter-input">
                                    <input value={ filter.dateTo } onChange={ onChange } className="input" type="date" name="dateTo" />
                                </div>
                            </div>
                        </div>
                    }

                    {
                        !jogs || loading
                            ? <Loader />
                            : !loading && jogs && jogs.length > 0
                                ? (
                                    <>
                                        <div className="jogs__list">
                                            {
                                                jogs.map(jog => (
                                                    <Link className="jogs__list-item-wrapper" key={ jog.id } to={ `edit-jog/${jog.id}` }>
                                                        <div className="jogs-item">
                                                            <div className="jogs-item__icon">
                                                                <img src={ require('../../img/icon.png') } alt="Jog Icon" />
                                                            </div>
                                                            <div className="jogs-item__info">
                                                                <div className="jogs-item__date">
                                                                    <Moment format="DD.MM.YYYY">
                                                                        { jog.date }
                                                                    </Moment>
                                                                </div>
                                                                <div className="jogs-item__params">
                                                                    <div className="jogs-item__param-label">Speed:</div>
                                                                    <div className="jogs-item__param-value">
                                                                        15
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
                                                    </Link>
                                                ))
                                            }

                                        </div>

                                        <Link to="/add-jog">
                                            <div className="jogs__add"></div>
                                        </Link>
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
            </div>
        </div>
    )

}

Jogs.propTypes = {
    jogs: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    filter: PropTypes.object.isRequired,
    getJogs: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    jogs: state.jog.jogs,
    loading: state.jog.loading,
    filter: state.jog.filter,
})

export default connect(mapStateToProps, { getJogs, setJogsLoading, setFilter })(Jogs)
