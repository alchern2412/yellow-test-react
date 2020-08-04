import { LOGIN_SUCCESS, USER_LOADED } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    user: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access_token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case USER_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        default:
            return { ...state }

    }
}