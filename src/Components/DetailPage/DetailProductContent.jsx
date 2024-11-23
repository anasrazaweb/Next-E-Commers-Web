"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Plus, Minus, Heart } from 'lucide-react';

const DetailProductContent = () => {
    const [count, setcount] = useState(0)
    return (
        <div className=' flex flex-col gap-2 mt-10 md:mt-0'>
            <h6 className=' font-semibold'>Havic HV G-92 Gamepad</h6>
            <div className='flex gap-3 items-center'>
                <div className='flex '>
                    <Image  alt='img' src='/star.svg' height={15} width={15} />
                    <Image  alt='img' src='/star.svg' height={15} width={15} />
                    <Image  alt='img' src='/star.svg' height={15} width={15} />
                    <Image  alt='img' src='/star.svg' height={15} width={15} />
                </div>
                <div className='text-[14px]'>
                    <p>(150 Reviews)</p>
                </div>
                |
                <div className=' text-[#66FFA3]'>
                    in Stock
                </div>
                <div>

                </div>
            </div>
            <h1 className=' text-[24px] font-semibold'>$192.00</h1>
            <p className=' border-b-[2px] text-[14px] md:pr-4 border-zinc-800 pb-5'>
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>
            <div className="color flex mt-3 gap-3 items-center">
                <h5 className=' text-[20px] font-semibold '>Colours :</h5>

                <input
                    type="radio"
                    name="hs-radio-group"
                    className=" mt-0.5 h-5 w-5 rounded-full disabled:pointer-events-none bg-blue-800 dark:border-blue-700"
                    checked
                />

                <div className="flex">
                    <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5  h-5 w-5 border-blue-900 rounded-full  bg-blue-800 dark:border-blue-700  " />

                </div>
            </div>
            <div className="size flex mt-5 gap-4 items-center">
                <h5 className=' text-[20px] font-semibold '>Size :</h5>
                <div className="flex text-[16px] font-semibold gap-5">
                    <div className="box h-[32px] md:h-[40px] w-[32px] md:w-[40px]  rounded-lg border-black border-[1.7px] flex justify-center items-center">
                        XS
                    </div>
                    <div className="box h-[32px] md:h-[40px] w-[32px] md:w-[40px] rounded-lg bg-red-700 text-white border-black border-[1.7px] flex justify-center items-center">
                        S
                    </div>
                    <div className="box h-[32px] md:h-[40px] w-[32px] md:w-[40px] rounded-lg border-black border-[1.7px] flex justify-center items-center">
                        ML
                    </div>
                    <div className="box h-[32px] md:h-[40px] w-[32px] md:w-[40px] rounded-lg border-black border-[1.7px] flex justify-center items-center">
                        M
                    </div>
                    <div className="box h-[32px] md:h-[40px] w-[32px] md:w-[40px] rounded-lg border-black border-[1.7px] flex justify-center items-center">
                        L
                    </div>
                </div>
            </div>
            <div className="counter w-full flex gap-5 md:gap-10 mt-5 items-center ">
                <div className='flex items-center w-32 text-[20px] '>
                    <button className=' border-[1px] border-zinc-700 p-2 ' onClick={() => setcount(count - 1)}>
                        <Minus />
                    </button>
                    <button className='text-[21px] border-t-[1px] w-[200px] border-b-[1px] border-zinc-700 p-[4px]' >
                        {count}
                    </button>
                    <button className=' border-[1px] bg-red-700  border-zinc-700 p-2' onClick={() => setcount(count + 1)}>
                        <Plus color='white' />
                    </button>
                </div>
                <div className='Buybtn'>
                    <button className=' text-[13px] md:text-[16px] rounded-md   bg-red-700  text-white  border-zinc-700  p py-3 px-4'>Buy Now</button>
                </div>
                <div className='heart_ixon'>
                    <button className='text-[26px] border-[1px] border-zinc-700 p-2'>
                        <Heart />
                    </button>
                </div>
            </div>
            <div className="footer_box border-[1px]  border-zinc-800 mt-5 w-full md:w-[400px] ">
                <div className='border-b-[1px] border-zinc-800 flex gap-5 pl-5 py-3 ' >
                    <div>
                        <Image  alt='img' src='Cardbus.svg' width={50} height={50} />
                    </div>
                    <div>
                        <p className='text-[15px] font-semibold'>Free Delivery</p>
                        <p className='text-[13px]'>Enter your postal code for Delivery Availability</p>
                    </div>

                </div>
                <div className='flex gap-5 pl-5 py-3 '>
                    <div>
                        <Image  alt='img' src='loader.svg' width={50} height={50} />
                    </div>
                    <div>
                        <p className='text-[15px] font-semibold'>Return Delivery</p>
                        <p className='text-[13px]'>Free 30 Days Delivery Returns. Details</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default DetailProductContent