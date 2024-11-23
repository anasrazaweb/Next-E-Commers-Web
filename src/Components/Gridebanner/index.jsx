import Image from 'next/image'
import React from 'react'

const GridBox = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div className=" hidden md:grid max-w-full px-5 md:px-20 grid-cols-12 gap-10 mt-10">

                <div className=" rounded-lg border border-gray-900  bg-gray-800 sm:col-span-6">
                    <Image alt='img' src='/img/banner1.png' height={100} width={470} className=' h-full w-full' />
                </div>
                <div className="col-span-12 rounded-lg border   sm:col-span-6">
                    {/* <!-- Sidebar --> */}
                    <Image alt='img' src='/img/banner2.png' height={100} width={950} className=' h-[50%] w-full' />

                    <div className='md:flex  justify-between mt-7'>
                        <Image alt='img' src='/img/banner3.png' height={1000} width={260} />
                        <Image alt='img' src='/img/banner5.png' height={1000} width={260} />
                    </div>



                </div>
            </div>

            <div className='md:hidden block'>
                <Image alt='img' src='/img/banner1.png' height={100} width={100} className='h-[300px] w-full mt-4'  />
                <Image alt='img' src='/img/banner2.png' height={100} width={100} className='h-[300px] w-full mt-4'   />
                <Image alt='img' src='/img/banner3.png' height={100} width={100} className='h-[300px] w-full mt-4'  />
                <Image alt='img' src='/img/banner5.png' height={100} width={100} className='h-[300px] w-full mt-4'  />
            </div>
        </div>
    )
}

export default GridBox