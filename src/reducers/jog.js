import { GET_JOGS, ADD_JOG, SET_JOGS_LOADING, SET_FILTER } from "../actions/types"

const initialState = {
    jogs: null,
    users: [],
    loading: true,
    filter: {
        filter: false,
        dateFrom: '1970-01-01',
        dateTo: new Date().toISOString().substr(0, 10)
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_JOGS:
            return {
                ...state,
                jogs: state.filter.filter
                    ? payload.jogs.filter(jog => {
                        const jogDate = +new Date(jog.date)
                        const dateFrom = +new Date(state.filter.dateFrom)
                        const dateTo = +new Date(state.filter.dateTo)

                        return jogDate >= dateFrom && jogDate <= dateTo
                    })
                    : payload.jogs,
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
        case SET_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [payload.name]: payload.value
                }
            }
        default:
            return {
                ...state
            }
    }
}



