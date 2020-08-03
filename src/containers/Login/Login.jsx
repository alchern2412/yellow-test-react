import React from 'react'
import PropTypes from 'prop-types'
import './Login.scss'

const Login = props => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login__icon">
                    <div className="login__icon-img"></div>
                </div>
                <div className="login__btn">
                    <button className="btn" type="button" value="Let me in">Let me in</button>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {

}

export default Login
