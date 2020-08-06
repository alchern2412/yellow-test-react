import { GET_JOGS, GET_JOG, ADD_JOG, SET_JOGS_LOADING, SET_FILTER, SET_JOG } from "../actions/types"

const initialState = {
    jogs: null,
    users: [],
    loading: true,
    filter: {
        filter: false,
        dateFrom: '1970-01-01',
        dateTo: new Date().toISOString().substr(0, 10)
    },
    jog: null
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_JOGS:
            return {
                ...state,
                jogs: state.filter.filter
                    ? payload.jogs.filter(jog => {
                        const jogDate = +new Date(jog.date * 1000)
                        const dateFrom = +new Date(state.filter.dateFrom)
                        const dateTo = +new Date(state.filter.dateTo)

                        return jogDate >= dateFrom && jogDate <= dateTo
                    })
                    : payload.jogs,
                users: payload.users,
            }
        case GET_JOG:
            return {
                ...state,
                jog: payload
            }
        case ADD_JOG:
            return {
                ...state,
                jogs: [payload, ...state.jogs]
            }
        case SET_JOG:
            return {
                ...state,
                jog: payload
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



