import { addContent } from "../../actions/productAction";

const addProduct = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://technical-server-site.onrender.com/product", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': "application/json"
            }
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(addContent({
                _id: data.insertedId,
                ...product,
            }))
        }
    };
};

export default addProduct;