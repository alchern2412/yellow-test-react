import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS } from './types'

/* Action creators */
const loadUserActionCreator = (user) => ({
    type: USER_LOADED,
    payload: user
})

const loginSuccessActionCreator = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})

const authErrorActionCreator = () => ({
    type: AUTH_ERROR
})

/* Actions */
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('https://jogtracker.herokuapp.com/api/v1/auth/user')
        dispatch(loadUserActionCreator(res.data.response))
    } catch (err) {
        dispatch(authErrorActionCreator())
    }
}

export const login = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ uuid: 'hello' })

    try {
        const res = await axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', body, config)
        dispatch(loginSuccessActionCreator(res.data.response))
        dispatch(loadUser())
    } catch (err) {
        dispatch(authErrorActionCreator())
    }
}