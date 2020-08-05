import axios from 'axios'
import {
    GET_JOGS,
    GET_JOG,
    JOG_ERROR,
    SET_JOGS_LOADING,
    SET_FILTER,
    SET_JOG,
} from './types'

/* Action creators */
const getJogsActionCreator = (response) => ({
    type: GET_JOGS,
    payload: response
})
const getJogActionCreator = (jog) => ({
    type: GET_JOG,
    payload: jog
})

const jogErrorActionCreator = (msg, status) => ({
    type: JOG_ERROR,
    payload: {
        msg,
        status
    }
})

const setFilterActionCreator = (name, value) => ({
    type: SET_FILTER,
    payload: {
        name,
        value
    }
})
const setJogActionCreator = (jog) => ({
    type: SET_JOG,
    payload: jog
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

export const getJog = (jogId) => async dispatch => {
    try {
        const res = await axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync')
        dispatch(getJogActionCreator(res.data.response.jogs.find(jog => jog.id.toString() === jogId.toString())))
    } catch (err) {
        dispatch(jogErrorActionCreator(err.response.statusText, err.response.status))
    }
}

export const setJog = (jog) => dispatch => {
    dispatch(setJogActionCreator(jog))
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
        await axios.post(`https://jogtracker.herokuapp.com/api/v1/data/jog`, formData, config)

        history.push('/jogs')
    } catch (err) {
        dispatch(jogErrorActionCreator(err.response.statusText, err.response.status))
        dispatch(setJogsLoading(false))
    }
}

export const editJog = (formData, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        dispatch(setJogsLoading(true))
        await axios.put(`https://jogtracker.herokuapp.com/api/v1/data/jog`, formData, config)
        history.push('/jogs')
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

export const setFilter = (name, value) => async dispatch => {
    dispatch(setFilterActionCreator(name, value))
    dispatch(getJogs())
}