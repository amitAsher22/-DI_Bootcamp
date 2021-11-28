const initialState = {
    count: 0,
   
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COUNT": return { ...state, count: action.payload };
     

        default: return state // do not update anything
    }

}