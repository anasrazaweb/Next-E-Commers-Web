import Image from 'next/image'
import React from 'react'

const DetailProducy = () => {
    return (
        <div className='flex gap-5 flex-col-reverse md:flex-row'>
            <div className=' w-full md:w-[35%] space-y-4 md:block flex gap-5 items-center'>
                <div className="box h-24 md:h-44 md:mt-0 mt-4 w-full drop-shadow-md bg-[#F5F5F5] flex justify-center items-center">
                    <Image alt='img' className=' md:h-[100px] h-[70px] md:w-[100px] w-[70px]' src='/detail1.png' height={90} width={100} />
                </div>
                <div className="box h-24 md:h-44   w-full drop-shadow-md bg-[#F5F5F5] flex justify-center items-center">
                    <Image alt='img' className=' md:h-[100px] h-[70px] md:w-[100px] w-[70px]' src='/detail2.png' height={90} width={100} />

                </div>
                <div className="box h-24 md:h-44   w-full drop-shadow-md bg-[#F5F5F5] flex justify-center items-center">
                    <Image alt='img' className=' md:h-[100px] h-[70px] md:w-[100px] w-[70px]' src='/detail3.png' height={90} width={100} />

                </div>
            </div>
            <div className=" w-full md:w-[65%] bg-[#F5F5F5] drop-shadow-md flex justify-center md:mt-0 mt-5 items-center">
                <Image alt='img' className='img' src='/detail4.png' height={400} width={400} />

            </div>
        </div>
    )
}

export default DetailProducy