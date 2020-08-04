import axios from 'axios'
import { GET_JOGS, JOG_ERROR } from './types'

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
