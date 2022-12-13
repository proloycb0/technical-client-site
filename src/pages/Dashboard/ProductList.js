import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductData from "../../redux/thunk/products/getProducts";
import ProductTable from "../../components/ProductTable";


const ProductList = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductData())
    });

    return (
        <div class='flex flex-col justify-center items-center h-full w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100'>
                    <div class='font-semibold text-gray-800'>Products</div>
                </header>

                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Image</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Product Name</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Brand</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>In Stock</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Price</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                            {products.map((product) => (
                                <ProductTable key={product._id} product={product}/>
                               ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
