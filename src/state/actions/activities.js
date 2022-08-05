export const loadActivities = (activities) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_ACTIVITIES",
            payload: activities
        })
    }
}

export const updateActivities = (val) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_ACTIVITIES",
            payload: val
        })
    }
}