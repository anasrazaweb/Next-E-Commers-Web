import { Search } from 'lucide-react'
import React from 'react'

const Searchbar = () => {
    return (
        <div>
            <div className='flex gap-2 justify-between   bg-slate-100 items-center px-5 rounded-sm py-[6px]'>
                <input type="text" placeholder='Search' className=' border-none outline-none bg-slate-100' />
                <div> <Search /></div>
            </div>
        </div>
    )
}

export default Searchbar