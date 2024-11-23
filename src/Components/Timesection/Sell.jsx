"use client"
import React from 'react'
import Date from './Date'
import Productcard from '../AllCards'
import TopRowpath from '../Top-Component/Row'
import AllCards from '../AllCards'
import "../../Components/ProductCards/product.css"
import { ALLPRODUCTDATA } from '../../../public/mock/_allProduct'

const Sell = () => {
  return (
    <div className=' md:px-20 px-5'>
      <div>
        <div>
          <TopRowpath para={"Today's"} />
        </div>

        <div className='md:hidden block mt-5'>
          {/* <RunTimer /> */}
        </div>
        <div>

          <Date />
        </div>
      </div>
      <div>
      </div>
      <div className='flex py-10    scroll  overflow-x-auto '>
        <div className='flex  gap-5'>
          {
            ALLPRODUCTDATA.map((product, index) => (
              < AllCards key={index} product = { product } />
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Sell