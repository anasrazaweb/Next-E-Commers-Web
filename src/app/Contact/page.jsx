import Form from '@/Components/Formdetail/Form'
import FormDetail from '@/Components/Formdetail/FormDetail'
import React from 'react'

const Contact = () => {
  return (
    <div className=' md:px-20 px-2'>
        <div className='w-full block md:flex '>
          <div className='md:w-[30%] w-full '>
            <FormDetail/>
          </div>
          <div className='md:w-[70%] w-full '>
            <Form/>
          </div>
        </div>
    </div>
  )
}

export default Contact