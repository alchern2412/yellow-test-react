import { GET_JOGS, ADD_JOG } from "../actions/types"

const initialState = {
    jogs: [],
    users: [],
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_JOGS:
            return {
                ...state,
                jogs: payload.jogs,
                users: payload.users
            }
        case ADD_JOG:
            return {
                ...state,
                jogs: [payload, ...state.jogs]
            }
        default:
            return {
                ...state
            }
    }
}



