import { GET_CONTENT, READING_HISTORY } from "../actionTypes/actionTypes";

export const getContent = (products) => {
    return {
        type: GET_CONTENT,
        payload: products,
    };
};
export const addToReadingHistory = (product) => {
    return {
        type: READING_HISTORY,
        payload: product,
    };
};