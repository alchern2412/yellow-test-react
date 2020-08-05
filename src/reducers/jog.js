import { GET_JOGS, ADD_JOG, SET_JOGS_LOADING } from "../actions/types"

const initialState = {
    jogs: null,
    users: [],
    loading: true
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_JOGS:
            return {
                ...state,
                jogs: payload.jogs,
                users: payload.users,
                // loading: false
            }
        case ADD_JOG:
            return {
                ...state,
                jogs: [payload, ...state.jogs]
            }
        case SET_JOGS_LOADING:
            return {
                ...state,
                loading: payload
            }
        default:
            return {
                ...state
            }
    }
}



