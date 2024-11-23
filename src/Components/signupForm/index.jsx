import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Form = () => {
    return (
        <div className=''>
            <div className=''>
                <h1 className=' text-2xl font-semibold mb-5'>Create an account</h1>
                <p className=' text-[14px]'>Enter your details below</p>
                <form action="">
                    <form className="w-full max-w-sm mt-4 flex flex-col gap-5">
                        <div className="flex items-center border-b border-black py-2">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Name"
                                aria-label="Full name" />

                        </div>
                        <div className="flex items-center border-b border-black py-2">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Email or Phone Number"
                                aria-label="Full name" />

                        </div>
                        <div className="flex items-center border-b border-black py-2">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Password"
                                aria-label="Full name" />

                        </div>
                    </form>
                </form>
                <div className=' space-y-3 mt-5'>
                    <div>
                        <button className=' w-full bg-red-700  text-white py-3'>Create Account</button>
                    </div>
                    <div>
                        <button className=' w-full py-2 flex gap-4 items-center justify-center border-[1px] border-black'>
                            <Image alt='img' src='/google.svg' height={30} width={30} />
                            Sing Up With Google</button>
                    </div>
                </div>
                <div className=' mt-5 flex  w-full justify-center items-center'>
                    <p className=' text-[14px] mr-3'>Already have account?</p>
                    <Link href="/login" className=' underline text-blue-600 font-semibold text-sm border-black'>Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Form