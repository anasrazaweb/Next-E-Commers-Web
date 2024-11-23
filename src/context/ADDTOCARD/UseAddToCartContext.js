import React, { useContext } from 'react'
import { AddCardContext } from './AddCardContext'

const UseAddToCartContext = () => {
    const context = useContext(AddCardContext)
    if(!context) throw new Error("Use context must be used whitin AuthProvider")
    return context;
}

export default UseAddToCartContext