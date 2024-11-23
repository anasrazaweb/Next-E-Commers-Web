export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDTOCART':
            return [...state, action.payload];
        default: return state;
    }
};