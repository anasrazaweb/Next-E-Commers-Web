import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'

const Hero = () => {
    return (
        <div className=' border-t-2 border-zinc-300 flex  '>

            <div>
                <Sidebar />
            </div>
            <div className='relative w-full px-2 md:w-[60vw] mx-auto my-auto  '>
                <Main />
            </div>
        </div>
    )
}

export default Hero