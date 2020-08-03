const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: true,
    loading: false,
    user: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        default:
            return { ...state }

    }
}