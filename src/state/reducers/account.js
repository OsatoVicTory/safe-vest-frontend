const accountReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_ACCOUNT":
        case "UPDATE_ACCOUNT":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default accountReducer;