import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.scss'
import { setFilter } from '../../actions/jog'

const Header = ({
    auth: {
        isAuthenticated,
        loading
    },
    filter: {
        filter
    },
    setFilter
}) => {
    const authLinks = [
        { name: 'Jogs', path: '/jogs' },
        { name: 'Info', path: '/info' },
        { name: 'Contact Us', path: '/contact-us' },
    ]

    const filterCls = filter ? 'active' : ''

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Link to="/">
                        <div className="header__logo-link" />
                    </Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        {
                            !loading && isAuthenticated
                                ? <> {
                                    authLinks.map(link => (
                                        <li key={ link.name } className="header__item">
                                            <Link to={ link.path } className="header__link">{ link.name }</Link>
                                        </li>
                                    ))
                                }
                                    <li onClick={ () => setFilter('filter', !filter) } className="header__item">
                                        <div className={ `header__link header__link-filter ${filterCls}` }></div>
                                    </li>
                                </>
                                : null
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    filter: state.jog.filter
})

export default connect(mapStateToProps, { setFilter })(Header)
