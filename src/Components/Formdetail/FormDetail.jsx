import React from 'react'
import { PhoneCall, Mail } from 'lucide-react';
const FormDetail = () => {
    return (
        <div className='w-full p-2 md:p-5'>
            <div className=' bg-white md:shadow-xl'>
                <div className="box p-5">
                    <div className='flex gap-5 items-center mb-5 '>
                        <div className=' h-12 rounded-full flex justify-center items-center text-white  w-12 bg-slate-950'>
                            <PhoneCall />
                        </div>
                        <p className=' text-[17px] font-semibold'>Call To Us</p>
                    </div>
                    <div className=' space-y-3'>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone : +9203122332406</p>
                    </div>
                </div>

                <div className="box p-5">
                    <div className='flex gap-5 items-center mb-5 '>
                        <div className=' h-12 rounded-full flex justify-center items-center text-white  w-12 bg-slate-950'>
                            <Mail />
                        </div>
                        <p className=' text-[17px] font-semibold'>Call To Us</p>
                    </div>
                    <div className=' space-y-3'>
                        <p>Fill out our form and we will you contact  within  24 hours.</p>
                        <p>anasraza54545@gmail.com</p>
                        <p>anasraza.div@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDetail