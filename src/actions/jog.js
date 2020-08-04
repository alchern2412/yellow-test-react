import axios from 'axios'
import { GET_JOGS, JOG_ERROR, ADD_JOG } from './types'

// Get jogs
export const getJogs = () => async dispatch => {
    try {
        const res = await axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync')

        dispatch({
            type: GET_JOGS,
            payload: res.data.response
        })
    } catch (err) {
        dispatch({
            type: JOG_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}


// Add jog
export const addJog = (formData, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post(`https://jogtracker.herokuapp.com/api/v1/data/jog`, formData, config)

        dispatch({
            type: ADD_JOG,
            payload: res.data.response
        })

        history.push('/jogs')
        // dispatch(setAlert('Jog Created', 'success'))
    } catch (err) {
        dispatch({
            type: JOG_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}