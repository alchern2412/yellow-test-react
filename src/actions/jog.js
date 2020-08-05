import axios from 'axios'
import { GET_JOGS, JOG_ERROR, ADD_JOG, SET_JOGS_LOADING } from './types'

/* Action creators */
const getJogsActionCreator = (response) => ({
    type: GET_JOGS,
    payload: response
})

const addJogActionCreator = (jog) => ({
    type: ADD_JOG,
    payload: jog
})

const jogErrorActionCreator = (msg, status) => ({
    type: JOG_ERROR,
    payload: {
        msg,
        status
    }
})

/* Actions */
export const getJogs = () => async dispatch => {
    dispatch(setJogsLoading(true))
    try {

        const res = await axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync')
        dispatch(getJogsActionCreator(res.data.response))
        dispatch(setJogsLoading(false))

    } catch (err) {
        dispatch(jogErrorActionCreator(err.response.statusText, err.response.status))
        dispatch(setJogsLoading(false))
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
        dispatch(setJogsLoading(true))
        const res = await axios.post(`https://jogtracker.herokuapp.com/api/v1/data/jog`, formData, config)

        dispatch(addJogActionCreator(res.data.response));
        history.push('/jogs')
        dispatch(setJogsLoading(false))
    } catch (err) {
        dispatch(jogErrorActionCreator(err.response.statusText, err.response.status))
        dispatch(setJogsLoading(false))
    }
}

export const setJogsLoading = loading => dispatch => {
    dispatch({
        type: SET_JOGS_LOADING,
        payload: loading
    })
}

export const setFilter = (dateFrom, dateTo) => dispatch => {

}