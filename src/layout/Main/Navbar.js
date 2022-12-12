import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" text-white bg-slate-800 sticky top-0 z-30">
            <div className='mx-auto p-3 max-w-7xl'>
                <div className='flex justify-between items-center'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                                <li>
                                    <Link to='/readingHistory'>Reading History</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'>Dashboard</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to={"/"} className="text-2xl uppercase font-bold text-white">SunTech</Link>
                    </div>
                    <div className='navbar-center'>
                        <div className="hidden md:block">
                            <input
                                type="text"
                                placeholder="Search here"
                                className="input w-72 rounded-sm"
                            />
                            <input
                                className="ml-3 btn bg-purple-600  rounded-md font-bold border-none text-white uppercase"
                                type="button"
                                value="Search"
                            />
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/readingHistory'>Reading History</Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;