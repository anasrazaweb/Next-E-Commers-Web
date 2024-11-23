import Image from 'next/image'
import React from 'react'
import '../../Components/ProductCards/Product.css'

const BroCard = ({svgimg,cardname}) => {
  return (
    <div>
        <div className=' h-[115px] border-2 border-zinc-300 w-[130px] rounded-md '>
            <div className='flex justify-center items-center h-full w-full text-[15px] gap-1 flex-col'>
                <Image alt='img' src={svgimg} width={50} height={50} className='svg-image'/>
                <p>{cardname}</p>
                <p>{cardname}</p>
            </div>
        </div>
    </div>
  )
}

export default BroCard