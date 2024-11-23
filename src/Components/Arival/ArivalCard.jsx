import Image from 'next/image'
import React from 'react'

const ArivalCard = ({Data}) => {
  return (
    <div className='w-[250px] h-[160px]  '>
        <div className="icone flex justify-center">
            <Image alt='img' src={Data.imges} width={70} height={70}/>
        </div>
        <div className='mt-5 text-center '>
            <h6 className='font-semibold '>{Data.head}</h6>
            <p className='text-[13px] mt-1'>{Data.para}</p>
        </div>
    </div>
  )
}

export default ArivalCard