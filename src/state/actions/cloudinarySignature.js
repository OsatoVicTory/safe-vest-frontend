export const loadSignature = (signature) => {
    return (dispatch) => {
        dispatch({
            type: "LOAD_SIGNATURE",
            payload: signature
        })
    }
}