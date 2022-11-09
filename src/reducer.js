const initialState = {
    shoppingList: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
            return {
                ...state,
                shoppingList: [...state.shoppingList, action.payload],
            }
        default:
            return state;
    }
}

export default reducer;