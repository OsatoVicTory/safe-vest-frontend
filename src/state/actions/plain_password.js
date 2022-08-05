export const loadPassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_PASSWORD",
            payload: password
        })
    }
}