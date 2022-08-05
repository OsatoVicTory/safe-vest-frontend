export const loadInvestments = (investments) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_INVESTMENTS",
            payload: investments
        })
    }
}

export const updateInvestments = (investments) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_INVESTMENTS",
            payload: investments
        })
    }
}

export const createInvestments = (investments) => {
    return (dispatch) => {
        dispatch({
            type: "CREATE_INVESTMENTS",
            payload: investments
        })
    }
}