const limitReducer = (state = 0, action) => {
    switch(action.type) {
        case "LOAD_LIMIT":
        case "UPDATE_LIMIT":
            return action.payload;

        default: 
            return state;
    }
}

export default limitReducer;