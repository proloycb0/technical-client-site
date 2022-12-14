import { updateContent } from "../../actions/productAction";

const updateProducts = (product, id, reset) => {
  console.log(product);
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://technical-server-site.onrender.com/product/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.data.acknowledged) {
      reset();
      dispatch(updateContent(product, id));
    }
  };
};
export default updateProducts;
