import { deleteContent } from "../../actions/productAction";


const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://technical-server-site.onrender.com/product/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();

            if(data.data.deletedCount) {
                dispatch(deleteContent(id));
            }

    };
};

export default deleteProduct;