import { GET_CONTENT, READING_HISTORY } from "../actionTypes/actionTypes";


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
        case READING_HISTORY:
            if(matchHistoryProduct) {
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

        default:
            return state;
    }
};

export default productReducer;