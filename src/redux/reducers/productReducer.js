import { GET_CONTENT } from "../actionTypes/actionTypes";


const initialState = {
    products: [],
    readingHistory: [],
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                products: action.payload,
            };
    
        default:
            return state;
    }
};

export default productReducer;