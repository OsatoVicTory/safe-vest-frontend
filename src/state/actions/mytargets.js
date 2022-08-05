export const loadTargets = (targets, amount) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_TARGETS",
            payload: [targets, amount]
        })
    }
}

export const updateTargets = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_TARGETS",
            payload: amount
        })
    }
}

export const createTargets = (targets) => {
    return (dispatch) => {
        dispatch({
            type: "CREATE_TARGETS",
            payload: targets
        })
    }
}

export const updateAllTargets = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_ALL_TARGETS",
            payload: amount
        })
    }
}