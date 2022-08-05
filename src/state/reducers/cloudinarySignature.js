const getSignatureReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_SIGNATURE":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default getSignatureReducer;