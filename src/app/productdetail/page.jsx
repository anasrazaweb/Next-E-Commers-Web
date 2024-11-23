import Detail from '@/Components/DetailPage/Detail'
import React from 'react'

const Page = () => {
    return (
        <div className='px-5 md:px-20'>
            <div className='flex gap-2 text-[14px] my-10'>
                <div className='flex gap-2 text-zinc-400'>
                    <p>Account</p>
                    /
                    <p>Gaming</p>
                    /
                </div>
                <div >
                    <p>Havic HV G-92 Gamepad</p>
                </div>
            </div>
            <div className='Box'>
                <Detail />
            </div>
        </div>
    )
}

export default Page