import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, READING_HISTORY, UPDATE_CONTENT } from "../actionTypes/actionTypes";


const initialState = {
    products: [],
    readingHistory: [],
};


const productReducer = (state = initialState, action) => {
    const matchHistoryProduct = state.readingHistory.find(
        (product) => product._id === action.payload._id
    );
    const uniqueHistoryProduct = state.readingHistory.filter(
        (product) => product._id !== action.payload._id
    );

    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_CONTENT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case READING_HISTORY:
            if (matchHistoryProduct) {
                return {
                    ...state,
                    readingHistory: [matchHistoryProduct, ...uniqueHistoryProduct],
                };
            } else {
                return {
                    ...state,
                    readingHistory: [action.payload, ...state.readingHistory],
                };
            };
        case UPDATE_CONTENT:
            const oldProduct = state.products.filter(
                (product) => product._id !== action.payload.id
            );
            return {
                ...state,
                products: [...oldProduct, action.payload.product],
            };
        case DELETE_CONTENT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product._id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default productReducer;