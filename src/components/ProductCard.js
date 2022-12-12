import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToReadingHistory } from '../redux/actions/productAction';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            <Link to={"readingHistory"}>
                <div onClick={() => dispatch(addToReadingHistory(product))}>
                    <div className='h-52 w-52 mx-auto'>
                        <img src={product.image} alt={product.model} />
                    </div>
                    <h1 className='font-bold text-center'>{product.model}</h1>
                    <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
                    <div className=' flex-1'>
                        <ul className='space-y-2'>
                            {product.keyFeature.map((feature) => {
                                return (
                                    <li key={feature} className='text-sm '>
                                        {feature}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;