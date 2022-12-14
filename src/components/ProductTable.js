import React, { useState } from 'react';
import { BiTrash, BiEdit } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import deleteProduct from '../redux/thunk/products/deleteProduct';
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
                        <button onClick={() => dispatch(deleteProduct(_id))}>
                            <BiTrash className="w-5 h-5 text-red-500 btn btn-xs p-0 border-none bg-white hover:bg-white hover:border-none"></BiTrash>
                        </button>
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
                                onClick={() => setUpdateProduct(null)}
                                htmlFor="update-modal"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ???
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
        </>
    );
};

export default ProductTable;