"use client"
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import Searchbar from '../Searchbar';

const Navbar = ({ setIsOpenDrawer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className='flex justify-between px-3 md:px-20 py-5 items-center'>
            <div className='text-[24px] font-bold'>
                <h2>Exclusive</h2>
            </div>
            <div className='SideBar' ref={sidebarRef}>
                <ul className={`${isOpen ? "bg-black transition-all duration-100 absolute h-[100%] z-30 w-[70%] gap-8 text-white justify-center items-center flex flex-col top-0 left-0" : "md:flex hidden gap-6 text-[16px]"}`}>
                    <li><Link href="/" onClick={closeNavbar}>Home</Link></li>
                    <li><Link href="/Contact" onClick={closeNavbar}>Contact</Link></li>
                    {/* <li><Link href="/about">About</Link></li> */}
                    <li><Link href="/singup" onClick={closeNavbar}>Sign Up</Link></li>
                    <li><Link href="/login" onClick={closeNavbar}>Login</Link></li>
                </ul>
            </div>
            <div className='flex md:gap-4'>
                <div className='md:block hidden'>
                    <Searchbar />
                </div>
                <div className="icon flex gap-4 items-center">
                    <Heart />

                    <Link href={"/addtocard"} onClick={() => setIsOpenDrawer(true)}>
                        <ShoppingCart />
                    </Link>
                    <div className='md:hidden block' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
