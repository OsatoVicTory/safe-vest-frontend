export const loadSafelock = (safelock) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_SAFELOCK",
            payload: safelock
        })
    }
}

export const updateSafelock = (safelock) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SAFELOCK",
            payload: safelock
        })
    }
}

export const createSafelock = (safelock) => {
    return (dispatch) => {
        dispatch({
            type: "CREATE_SAFELOCK",
            payload: safelock
        })
    }
}