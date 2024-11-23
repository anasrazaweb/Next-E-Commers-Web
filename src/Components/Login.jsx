import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <h1 className=' text-2xl font-semibold mb-5'>Log in to Exclusive</h1>
      <p className=' text-[14px]'>Enter your details below</p>

      <form className="w-full max-w-sm mt-4 flex flex-col gap-5">

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
        <div>
          <div className=' flex justify-between mt-7 pr-10 items-center '>
            <button className=' bg-red-700 text-white px-4 py-1'>Login</button>
            <Link href={"/singup"} className=' text-[14px] text-red-700'>Forget Password?</Link>

          </div>
          <div className=' mt-5  flex '>
            <p className=' text-[14px] mr-3'>Create new account?</p>
            <Link href="/singup" className=' underline text-blue-600 font-semibold text-sm border-black'>SingUp</Link>
          </div>
        </div>
      </form>

    </div>
  )
}

export default LoginForm