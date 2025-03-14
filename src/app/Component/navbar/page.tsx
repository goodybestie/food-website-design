"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaPhoneAlt, FaGoogle, FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); 

    const List = [
        { label: "Home", href: "/" },
        { label: "About", href: "/aboutpage" },
        { label: "Menu", href: "/menupage" },
        { label: "Page", href: "/blogpage" },
        { label: "Contact", href: "/contactpage" }
    ];

    return (
        <>
            {/* Top bar */}
            <div className="bg-[#474747]">
                <div className="flex justify-between items-center p-4 w-full md:w-[85%] m-auto">
                    <div className='flex gap-8'>
                        <div className='flex gap-2 text-white items-center'>
                            <FaPhoneAlt className='text-white w-3 h-3 hidden md:block' />
                            <p className='text-[14px] font-sans'>(414) 857 - 0107</p>
                        </div>
                        <div className='flex gap-2 text-white items-center'>
                            <FaGoogle className='text-white w-3 h-3' />
                            <p className='text-sm font-sans'>yummy@bistrobliss</p>
                        </div>
                    </div>

                    <div className='hidden md:flex gap-1'>
                        <FaTwitter className='text-white bg-[#F9F9F71F] rounded-full w-7 h-7 p-2' />
                        <FaFacebook className='text-white bg-[#F9F9F71F] rounded-full w-7 h-7 p-2' />
                        <FaInstagram className='text-white bg-[#F9F9F71F] rounded-full w-7 h-7 p-2' />
                        <FaTiktok className='text-white bg-[#F9F9F71F] rounded-full w-7 h-7 p-2' />
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className='p-4 w-[85%] m-auto flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src='/logo.png' alt='Logo' className='w-8 h-8' />
                    <h1 className='font-playfair text-2xl italic'>Bistro Bliss</h1>
                </div>

                <div className='hidden md:flex gap-4 text-sm font-Playfair'>
                    {List.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`
                                 p-2 rounded-[15px] w-[25%]  ${pathname === link.href ?
                                     'bg-[#DBDFD0]  text-black' : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className='hidden md:block'>
                    <button className="outline outline-1 rounded-[15px] p-2 text-[10px] font-DM Sans">
                        Book A Table
                    </button>
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className='md:hidden flex flex-col items-center gap-4 bg-[#474747] p-4'>
                    {List.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`text-white p-2 rounded-md ${pathname === item.href ? 'bg-[#AD343E]' : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
