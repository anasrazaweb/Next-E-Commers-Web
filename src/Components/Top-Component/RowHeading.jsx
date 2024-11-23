import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';


const RowHeading = ({ heading }) => {
    return (
        <div>
            <div className='mt-5 w-full flex justify-between items-center'>
                <div className='flex gap-20 items-center'>
                    <h1 className=' md:text-[36px] text-[1.2rem] font-semibold'>{heading}</h1>
                </div>

                <div className='flex gap-2 md:gap-5'>
                    <div className=' rounded-full bg-[#F5F5F5] flex justify-center items-center p-[6px] md:h-10 md:w-10 md:p-[10px] h-8 w-8 '> < ArrowLeft /></div>
                    <div className=' rounded-full bg-[#F5F5F5] flex justify-center items-center p-[6px] md:h-10 md:w-10 md:p-[10px] h-8 w-8  '> < ArrowRight /></div>

                </div>
            </div>
        </div>
    )
}

export default RowHeading