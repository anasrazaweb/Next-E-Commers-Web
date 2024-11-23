import React from 'react'
import Image from 'next/image'
import LoginForm from '@/Components/Login'


const Login = () => {
    return (
        <div className=' md:flex md:px-20'>
            <div className=' w-full md:w-[60%] flex justify-center items-center bg-[#C8E1E6] md:my-10 py-10 md:py-0'>
                <Image alt='img' src='/Login.png' width={500} height={500} className=' h-[200px] md:h-[400px] w-[200px] md:w-[400px]' />
            </div>
            <div className=' w-full md:w-[40%] md:m-10 pt-4 md:px-0 px-5'>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login