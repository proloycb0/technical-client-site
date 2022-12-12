import { GET_CONTENT } from "../actionTypes/actionTypes";

export const getContent = (products) => {
    return {
        type: GET_CONTENT,
        payload: products,
    };
};