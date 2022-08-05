export const loadLimit = (limit) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_LIMIT",
            payload: limit
        })
    }
}

export const updateLimit = (limit) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_LIMIT",
            payload: limit
        })
    }
}