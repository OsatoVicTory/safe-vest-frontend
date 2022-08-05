export const loadAccount = (account) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_ACCOUNT",
            payload: account
        })
    }
}

export const updateAccount = (account) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_ACCOUNT",
            payload: account
        })
    }
}