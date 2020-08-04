import { GET_JOGS } from "../actions/types"

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
        default:
            return {
                ...state
            }
    }
}



