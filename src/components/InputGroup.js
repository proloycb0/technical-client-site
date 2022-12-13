import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import updateProducts from "../redux/thunk/products/updateProducts";


const InputGroup = ({ updateProduct, setUpdateProduct }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const updatedProduct = {
      model: data.model,
      image: data.image,
      brand: data.brand,
      status: data.status === "true" ? true : false,
      price: data.price,
      keyFeature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ],
      spec: [data.spec],
    };
    if (updateProduct !== undefined){
        dispatch(updateProducts(updatedProduct, updateProduct._id, reset));
    }
     

    setUpdateProduct(null)
  };

  return (
    <div className="mt-4">
      <form
        className=" p-4 rounded-md flex flex-wrap gap-3 justify-between bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full  max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="model">
            Model
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            id="model"
            defaultValue={updateProduct?.model}
            {...register("model", { required: true })}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="image">
            Image Link
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="image"
            id="image"
            defaultValue={updateProduct?.image}
            {...register("image", { required: true })}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-3" htmlFor="brand">
            Brand
          </label>
          <select
            className="select select-bordered"
            name="brand"
            id="brand"
            {...register("brand", { required: true })}
          >
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="price"
            id="price"
            defaultValue={updateProduct?.price}
            {...register("price", { required: true })}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="available"
                value={true}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="available">
                Available
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stockOut"
                name="status"
                value={false}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="stockOut">
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="keyFeature1">
            Spec
          </label>
          <textarea
            className="input input-bordered w-full h-20"
            type="text"
            name="spec"
            id="spec"
            {...register("spec")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="keyFeature1">
            Key Feature 1
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="keyFeature1"
            id="keyFeature1"
            defaultValue={updateProduct?.keyFeature[0]}
            {...register("keyFeature1", { required: true })}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="keyFeature2">
            Key Feature 2
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="keyFeature2"
            id="keyFeature2"
            defaultValue={updateProduct?.keyFeature[2]}
            {...register("keyFeature2", { required: true })}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="keyFeature3">
            Key Feature 3
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="keyFeature3"
            id="keyFeature3"
            defaultValue={updateProduct?.keyFeature[2]}
            {...register("keyFeature3", { required: true })}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs lg:max-w-sm xl:max-w-md">
          <label className="mb-2" htmlFor="keyFeature4">
            Key Feature 4
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="keyFeature4"
            id="keyFeature4"
            defaultValue={updateProduct?.keyFeature[3]}
            {...register("keyFeature4", { required: true })}
          />
        </div>

        <div className="flex justify-end mt-8 items-center w-full float-right">
          <button
            className=" px-4 py-3  bg-indigo-500 rounded-md font-semibold text-white text-lg btn"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputGroup;
