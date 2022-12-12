import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import getProductData from '../../redux/thunk/products/getProducts';

const Home = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProductData());
    },[dispatch]);
    
    let content;

    if(products.length){
        content = products.map((product) => (
            <ProductCard key={product._id} product={product}/>
        ))
    }
    return (
        <div className="max-w-7xl mx-auto my-4 px-2">
            <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                    <div>
                        <button
                            // onClick={() => dispatch(toggleBrand("amd"))}
                            className={`border px-3 py-2 rounded-full font-semibold`}
                        >
                            Amd
                        </button>
                        <button
                            // onClick={() => dispatch(toggleBrand("intel"))}
                            className={`border px-3 py-2 rounded-full font-semibold`}
                        >
                            Intel
                        </button>
                        <button
                            // onClick={() => dispatch(toggleStock())}
                            className={`border px-3 py-2 rounded-full font-semibold `}
                        >
                            In Stock
                        </button>
                    </div>
                </div>
                <div className="py-1">
                    <select
                        // onChange={handleChange}
                        className="uppercase ml-1 px-2 h-full rounded-md -mt-[50px] outline-none"
                    >
                        <option
                            defaultValue={null}
                            className="bg-gray-400"
                            disabled
                            selected
                        >
                            Sort By
                        </option>
                        <option value={"firstUpload"} className="uppercase">
                            First Upload
                        </option>
                        <option value={"lastUpload"} className="uppercase">
                            Last Upload
                        </option>
                    </select>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Home;