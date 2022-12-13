import { GET_CONTENT, READING_HISTORY, UPDATE_CONTENT } from "../actionTypes/actionTypes";

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
export const updateContent = (product, id) => {
    return {
      type: UPDATE_CONTENT,
      payload: { product, id },
    };
  };