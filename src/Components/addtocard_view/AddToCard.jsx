"use client"
import UseAddToCartContext from '@/context/ADDTOCARD/UseAddToCartContext';
import { Delete, DeleteIcon, LucideDelete, Trash2 } from 'lucide-react';
import React from 'react';
// import { AddCardContext } from '../context/AddCardContext'; // Adjust the path as needed

const AddToCardView = () => {
  const { Product, addQuantity, subtractQuantity } = UseAddToCartContext()

  return (
    <div className=' px-2 md:px-10'>
      <div className="cart-container p-2 md:p-4 border ">
        <h2 className="text-2xl font-bold mb-4">Your Cart </h2>
        {Product.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className=' md:flex gap-5'>
              <div className=' w-full md:w-[70%]'>
                {Product.map((item, index) => (
                  <div key={index} className="cart-item border p-4 rounded-md shadow-md pb-4 mb-7 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                        {/* <p className="text-sm text-gray-600">Quantity: {item.quantity}</p> */}
                        <div className='flex gap-2 text-sm   items-center'>
                          <button
                            onClick={() => addQuantity(item.id)}
                            className='  text-blue-500  hover:bg-blue-100  h-5 flex justify-center items-center rounded-full w-5'>+</button>

                          <h1>{item.quantity}</h1>
                          <button
                            onClick={() => subtractQuantity(item.id)}
                            className=' text-red-500  hover:bg-red-100  h-5 flex justify-center items-center rounded-full w-5 text-xl'>-</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Trash2  />
                    </div>
                  </div>
                ))}
              </div>
              <div className=' border rounded-md h-64 shadow-md border-blue-800   w-full md:w-[30%] p-5'>
                <h1>Cart Total</h1>
                <div className="total-price mt-4 ">
                  <p className="text-lg font-semibold  flex justify-between border-b border-black py-2">
                    SubTotal:
                    <span> </span>
                  </p>
                  <p className="text-lg font-semibold  flex justify-between border-b border-black py-2">
                    Discount:
                    <span> </span>
                  </p>
                  <p className="text-lg font-semibold   flex justify-between border-b border-black py-2">
                    TotalAmount:
                    <span> </span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCardView;
