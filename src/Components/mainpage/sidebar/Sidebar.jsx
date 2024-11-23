"use client"
import React, { useState } from 'react'

const Sidebar = () => {
    const [isopen, setIsopen] = useState(false)
    const toggleDropdown = () => {
        setIsopen(!isopen);
    };
    return (
        <div>
            <aside id="sidebar-multi-level-sidebar" className=" md:block hidden text-[16.5px] text-black pr-5  border-r-2 border-zinc-200 w-80 " aria-label="Sidebar">
                <div className="  py-4 overflow-y-auto ">
                    <ul className=" text-[15px]">
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className=" ms-24">Woman’s Fashion</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 o   text-base transition duration-75 " aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example">
                                <span className="flex-1   text-left rtl:text-right  ms-24 " 
                                onClick={toggleDropdown}
                                >Men’s Fashion</span>
                                <svg
                                    
                                    className={`w-2 h-2 ${isopen ? "rotate-180" : "rotate-0"}`}  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" className={` ${isopen ? "block" : "hidden"}  py-2 ms-24 space-y-2 w-full p-2  transition duration-75 group `}>
                                <li>
                                    <a href="#" className="flex items-center ">Products</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center ">Billing</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center ">Invoice</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Kanban</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Electronics</span>
                                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3  ms-24  text-[16px] text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Home & Lifestyle</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Medicine</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Sports & Outdoor</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Baby’s & Toys</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Groceries & Pets</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  ">

                                <span className="flex-1  ms-24 ">Health & Beauty</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

        </div>

    )
}

export default Sidebar