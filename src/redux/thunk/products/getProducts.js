const { getContent } = require("../../actions/productAction");

const getProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://technical-server-site.onrender.com/products");
        const data = await res.json();

        if(data.data.length) {
            dispatch(getContent(data));
        }
    };
};

export default getProductData;