import React from 'react'
import DetailProductContent from './DetailProductContent'
import DetailProducy from './DetailProducy'

const Detail = () => {
  return (
    <div>
        <div className='md:flex gap-7 my-2 '>
        <div className='w-full md:w-[60%] mt-5  md:mt-0'><DetailProducy/></div>
        <div className='w-full md:w-[40%] '><DetailProductContent/></div>
        </div>
    </div>
  )
}

export default Detail