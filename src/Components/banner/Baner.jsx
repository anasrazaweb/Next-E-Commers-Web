import Image from 'next/image'
import React from 'react'
import iphone from "../../../public/Applelogo.png"
import { ArrowRight, MoveRight } from 'lucide-react';
import mobile from '../../../public/mobile.png'

const Baner = () => {
  return (
    <div className=' bg-black text-white'>
      <div className="box w-full flex">
        <div className="left  w-[50%] ml-4 md:ml-14 flex flex-col justify-start  md:justify-center my-4 md:py-10 ">
          <div className='flex gap-3 text-wrap  md:text-[12px] items-center mb-5 '>
            <Image
              src={iphone}
              alt="" height={40} width={40}
            />
            <p>iPhone 14 Series</p>
          </div>
          <h1 className=' text-[1rem] md:text-[2rem] font-semibold tracking-widest'> Up to 10% <br /> off Voucher</h1>
          <div>
            <div className=' text-[10px] md:text-[14px] flex gap mt-5 gap-2'>
              <button className=' border-b-2 border-white '>Shops Now
              </button>
                <MoveRight/>
            </div>
          </div>
        </div>
        <div className="right w-[60%]  flex mt-14 justify-start">
          <Image alt='img' src={mobile} />
        </div>
      </div>

    </div>
  )
}

export default Baner