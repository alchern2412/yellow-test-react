import { LOGIN_SUCCESS, USER_LOADED, AUTH_ERROR } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
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
                user: payload,
                loading: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            }
        default:
            return { ...state }

    }
}