import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sticky top-[73.5px] col-span-2 bg-indigo-200 h-[88.5vh] p-5 rounded-lg'>
            <ul className='flex gap-3 flex-col h-full'>
                <li>Admin Dashboard</li>
                <li>
                    <Link to='/dashboard'>Product List</Link>
                </li>
                <li>
                    <Link to='addProduct'>Add Product</Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/'>Back to Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;