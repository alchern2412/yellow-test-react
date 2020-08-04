import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS } from './types'

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('https://jogtracker.herokuapp.com/api/v1/auth/user')

        dispatch({
            type: USER_LOADED,
            payload: res.data.response
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
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
        console.log(res)
        // setAuthToken(localStorage.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.response
        })
        dispatch(loadUser())
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}