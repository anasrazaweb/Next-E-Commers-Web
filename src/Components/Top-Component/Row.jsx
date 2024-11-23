import React from 'react'

const TopRowpath = ({para}) => {
  return (
    <div>
      <div className=' flex gap-3 mt-10 items-center '>
        <div className="box h-8 rounded-sm w-4 bg-[#DB4444]"></div>
        <p className='text-[#DB4444]'>{para}</p>
      </div>
    </div>
  )
}

export default TopRowpath