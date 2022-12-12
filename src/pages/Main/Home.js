import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { toggleBrand, toggleStock } from '../../redux/actions/filterAction';
import getProductData from '../../redux/thunk/products/getProducts';

const Home = () => {
    const [update, setUpdate] = useState("");
    const products = useSelector((state) => state.product.products);
    const filters = useSelector((state) => state.filter.filters);
    const { brands, stock } = filters;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductData());
    }, [dispatch]);

    const activeClass = "text-white  bg-indigo-500 border-white";

    let content;

    if (products.length) {
        content = products.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))
    };

    const handleChange = (e) => {
        setUpdate(e.target.value);
      };

    if (products.length && (stock || brands.length)) {
        content = products
            .filter((product) => {
                if (stock) {
                    return product.status === true;
                }
                return product;
            })
            .filter((product) => {
                if (brands.length) {
                    return brands.includes(product.brand);
                }
                return product;
            })
            .map((product) => (
                <ProductCard key={product.model} product={product} />
            ));
    }

    if (update === "firstUpload") {
        content = products
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((product) => (
                <ProductCard product={product} key={product._id}></ProductCard>
            ));
    }
    if (update === "lastUpload") {
        content = products
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((product) => (
                <ProductCard product={product} key={product._id}></ProductCard>
            ));
    }
    if (update === "firstUpload") {
        content = products
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .map((product) => (
                <ProductCard product={product} key={product._id}></ProductCard>
            ));
    }
    console.log(update)
    return (
        <div className="max-w-7xl mx-auto my-4 px-2">
            <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                    <div>
                        <button
                            onClick={() => dispatch(toggleBrand("amd"))}
                            className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null}`}
                        >
                            Amd
                        </button>
                        <button
                            onClick={() => dispatch(toggleBrand("intel"))}
                            className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel") ? activeClass : null}`}
                        >
                            Intel
                        </button>
                        <button
                            onClick={() => dispatch(toggleStock())}
                            className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
                        >
                            In Stock
                        </button>
                    </div>
                </div>
                <div className="py-1">
                    <select
                        onChange={handleChange}
                        className="ml-1 px-2 h-full rounded-md -mt-[50px] outline-none"
                    >
                        <option
                            defaultValue={null}
                            className="bg-gray-400"
                            disabled
                            selected
                        >
                            Sort By
                        </option>
                        <option value={"firstUpload"}>
                            First Upload
                        </option>
                        <option value={"lastUpload"}>
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