import { updateContent } from "../../actions/productAction";

const updateProducts = (product, id, reset) => {
  console.log(product);
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:5000/product/${id}`,
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
    if (data.status === "Fail") {
    //   toast.error(data.error);
    }

    if (data.data.acknowledged) {
      reset();
    //   toast.success("Product Updated successfully.");
      dispatch(updateContent(product, id));
    }
  };
};
export default updateProducts;
