import Image from 'next/image'
import React from 'react'

const Deal = () => {
    return (
        <div>
            <div  className=' px-10'>
                <Image alt='img' src={"/img/bannerblacFridaysale.webp"} height={0} width={0} sizes="100vw"
                    style={{ width: '100%', height: '450px' }} />
            </div>
        </div>
    )
}

export default Deal