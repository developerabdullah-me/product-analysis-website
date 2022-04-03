import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav className="bg-gray-400 items-center p-5">
               <ul className="">
            <Link className="ml-10 font-bold text-xl hover:border-b-4 hover:border-indigo-gray-600  hover:text-amber-300 text-white" to="/home">Home</Link>
            <Link className="ml-10 font-bold text-xl hover:border-b-4 hover:border-indigo-gray-600  hover:text-amber-300 text-white" to="/review">Review</Link>
            <Link className="ml-10 font-bold text-xl hover:border-b-4 hover:border-indigo-gray-600  hover:text-amber-300 text-white" to="/dashbort">DashBort</Link>
            <Link className="ml-10 font-bold text-xl hover:border-b-4 hover:border-indigo-gray-600  hover:text-amber-300 text-white" to="/blogs">Blogs</Link>
            <Link className="ml-10 font-bold text-xl hover:border-b-4 hover:border-indigo-gray-600  hover:text-amber-300 text-white" to="/about">About</Link>
               </ul>
           </nav>
        </div>
    );
};

export default Header;