const passwordReducer = (state = "", action) => {
    switch (action.type) {
        case "LOAD_PASSWORD":
            return action.payload

        default:
            return state;
    }
}

export default passwordReducer;