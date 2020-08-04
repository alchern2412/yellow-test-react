import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Login.scss'
import auth from '../../reducers/auth'
import { login } from '../../actions/auth'

const Login = ({
    isAuthenticated,
    login
}) => {
    const onLogin = () => {
        console.log('onLogin')
        login()
    }
    if (isAuthenticated) {
        return <Redirect to="/jogs" />
    }
    return (
        <div className="login">
            <div className="content">
                <div className="login-wrapper">
                    <div className="login__icon">
                        <div className="login__icon-img"></div>
                    </div>
                    <div className="login__btn">
                        <button onClick={(e) => onLogin()} className="btn" type="button" value="Let me in">Let me in</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login)
