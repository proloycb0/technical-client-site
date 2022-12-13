import React, { useState } from 'react';
import { BiTrash, BiEdit } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import InputGroup from './InputGroup';

const ProductTable = ({ product }) => {
    const { image, model, brand, price, status, _id } = product;
    const [updateProduct, setUpdateProduct] = useState(null);
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td class='p-2'>
                    <input type='checkbox' class='w-5 h-5' value='id-1' />
                </td>
                <td class='p-2'>
                    <div>
                        <img width={"60px"} src={image} alt="" />
                    </div>
                </td>
                <td class='p-2'>
                    <div class='font-medium text-gray-800'>{model}</div>
                </td>
                <td class='p-2'>
                    <div class='text-left capitalize'>{brand}</div>
                </td>
                <td class='p-2'>
                    <div class='text-left'>
                        {status ? (
                            <p className='text-green-500 font-medium'>Available</p>
                        ) : (
                            <p className='text-red-500 font-medium'>Stock out</p>
                        )}
                    </div>
                </td>
                <td class='p-2'>
                    <div class='text-left font-medium text-indigo-500'>
                        {price}
                    </div>
                </td>
                <td class='p-2'>
                    <div class='flex justify-center'>
                        <label onClick={() => setUpdateProduct(product)} htmlFor="update-modal">
                            <BiEdit className="w-5 h-5 mr-3 btn btn-xs p-0 border-none text-gray-800 bg-white hover:bg-white hover:border-none"></BiEdit>
                        </label>
                        <label htmlFor="modal-delete">
                            <BiTrash className="w-5 h-5 text-red-500 btn btn-xs p-0 border-none bg-white hover:bg-white hover:border-none"></BiTrash>
                        </label>
                    </div>
                </td>
            </tr>
            {/* update modal  */}
            {
                updateProduct && <>
                    <input type="checkbox" id="update-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <label
                                htmlFor="update-modal"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <h2 className="text-secondary text-xl font-semibold text-center">
                                Update Product Info
                            </h2>
                            <div>
                                <InputGroup updateProduct={updateProduct} setUpdateProduct={setUpdateProduct}></InputGroup>
                            </div>
                        </div>
                    </div>
                </>
            }
            {/* delete modal */}
            <input type="checkbox" id="modal-delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="modal-delete"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold text-red-500">
                        Are You sure that you want to delete this product?
                    </h3>
                    <p className="py-4">
                        <span className="font-bold">Product Name:</span>{" "}
                        <span className="text-purple-700"> {model}</span>
                    </p>
                    <button
                        // onClick={() => dispatch(deleteProduct(product._id))}
                        className="float-right btn btn-sm bg-red-500 text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductTable;