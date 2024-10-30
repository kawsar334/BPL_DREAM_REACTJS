import React, { useEffect } from 'react';
import logo from "../assets/logo.png";
import coin from "../assets/coin.png";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ count }) => {

    const notify = () => {
        toast.success('Success Notification!', {
            position: "top-center"
        });

    };

    // useEffect(() => {
    //     toast.error('Success Notification!', {
    //         position: "top-center" 
    //     });

    // }, []); 

    return (
        <div className="navbar bg-[white] shadow sticky z-20 top-0 left-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Team</a></li>
                        <li><a>Schedules</a></li>
                        <li>
                            <a className='border rounded flex justify-start items-center '>
                                <span className='text-[#eb984e] text-2xl'><i class="fa-brands fa-connectdevelop"></i></span>
                                <span className=''>{count}</span>
                            </a>

                        </li>

                    </ul>

                </div>
                <div className="btn btn-ghost text-xl">
                    <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
                </div>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Team</a></li>
                    <li><a>Schedules</a></li>

                    <li><img src={logo} alt="logo" className='w-[30px] h-[30px]' /></li>
                    <li >
                        <a className='border rounded flex justify-start items-center '>
                            <span className='text-[#eb984e] text-2xl'><i class="fa-brands fa-connectdevelop"></i></span>
                            <span className=''>{count}</span>
                        </a>
                    </li>
                </ul>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Navbar;
