import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.scss'
import { setFilter } from '../../actions/jog'
import { useState } from 'react'

const Header = ({
    auth: {
        isAuthenticated,
        loading
    },
    filter: {
        filter
    },
    setFilter,
}) => {
    const authLinks = [
        { name: 'Jogs', path: '/jogs' },
        { name: 'Info', path: '/info' },
        { name: 'Contact Us', path: '/contact-us' },
    ]

    const filterCls = filter ? 'active' : ''
    const [burgerCls, setBurgerCls] = useState('')
    const onBurgerClick = () => {
        if (burgerCls === '') {
            setBurgerCls('active')
        } else {
            setBurgerCls('')
        }
    }
    const onLinkClick = () => {
        setBurgerCls('')
    }

    return (
        <header className={ `header ${burgerCls}` }>
            <div className="header__wrapper">
                <div className="header__logo">
                    <Link to="/">
                        <div className="header__logo-link" />
                    </Link>
                </div>

                <nav className={ `header__nav ${burgerCls}` }>
                    <ul className="header__list">
                        {
                            !loading && isAuthenticated
                                ? <> {
                                    authLinks.map(link => (
                                        <li key={ link.name } className="header__item">
                                            <Link onClick={onLinkClick} to={ link.path } className="header__link">{ link.name }</Link>
                                        </li>
                                    ))
                                }
                                </>
                                : null
                        }
                    </ul>
                </nav>
                <div className="header__actions">
                    {
                        window.location.pathname === '/jogs'
                            ? <div onClick={ () => setFilter('filter', !filter) } className={ `header__filter ${filterCls}` }></div>
                            : null
                    }
                    <div onClick={ () => onBurgerClick() } className={ `header__burger ${burgerCls}` }></div>
                </div>
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
