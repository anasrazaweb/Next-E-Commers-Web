import React from 'react'

const Form = () => {
    return (
        <div className='p-2 md:p-5'>
            <div className='   py-2 md:shadow-xl px-0 md:px-5'>
                <div className="md:flex md:items-center mb-6 gap-4 space-y-6 md:space-y-0 pt-4 ">
                    <div className="md:w-2/3 w-full">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value=""
                            placeholder='Your Name'
                        />
                    </div>
                    <div className="md:w-2/3 w-full">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value=""
                            placeholder='Your Email'
                        />
                    </div>
                    <div className="md:w-2/3 w-full">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value=""
                            placeholder='Your Phone'
                        />
                    </div>

                </div>
                <div>
                    <textarea id="message" rows="15" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    placeholder="Enter Your Message"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Form