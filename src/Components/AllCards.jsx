"use client"
import React, { useContext } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { CheckCheck, Eye, EyeOff, Heart, HeartHandshake, ShoppingCart } from 'lucide-react';
// import { AddCardContext } from '@/context/ADDTOCARD/AddCardContext';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { AddCardContext } from '@/context/ADDTOCARD/AddCardContext';

const AllCards = ({ product }) => {
    const { AddToCart } = useContext(AddCardContext);

    const [isHeardClick, setIsHeardClick] = React.useState(false);
    const [isEyeClick, setIsEyeClick] = React.useState(false);

    const HeardClick = () => setIsHeardClick(!isHeardClick);
    const EyeClick = () => setIsEyeClick(!isEyeClick);

    if (!product) {
        return <div>Loading...</div>;
    }

    const { image, price, discountperson, name } = product;

    // Calculate the discount amount
    let Totleprice = price;
    let personAmount = Totleprice * discountperson / 100;
    let discountAmount = Totleprice - personAmount;
    let ShowDiscountChip = discountperson > 0;

    // Format the discounted price to two decimal places
    let formattedDiscountAmount = discountAmount.toFixed(2);
    let formattedTotalPrice = Totleprice?.toFixed(2);

    const notify = () => toast((t) => (
        <span className=' flex gap-3 text-green-700 font-semibold items-center  '>
            <CheckCheck size={17} />
            Successful  AddToCart
            <Link href="/addtocard" onClick={() => toast.dismiss(t.id)} className=' text-blue-700'>
                See
            </Link>
        </span>
    ));

    const handleAddToCart = () => {
        notify();
        AddToCart({ id: product.id, name, price, image });
    };


    return (

        <div className=' w-[280px] md:w-[220px] shadow-lg p-2'>
            {/* <Toaster
                position="top-right"
                reverseOrder={false}
            /> */}
            <div className=' relative card '>
                <div className='h-[200px] w-full bg-[#F5F5F5] flex justify-center items-center '>

                    <Image alt='img'  src={image} height={130} width={130} />
                </div>
                {/* <div className='absolute top-0 left-0 h-full w-full p-2'>
                    <div className='flex justify-between'>
                        {ShowDiscountChip && (
                            <div className='h-5 mt-3 bg-[#ff6464] px-2 text-[12px] text-white rounded-xl'>
                                {discountperson}% Discount
                            </div>
                        )}
                        <div className="icons flex flex-col gap-2">
                            <div
                                onClick={EyeClick}
                                className='flex justify-center items-center p-2 bg-white rounded-full'>
                                {isEyeClick ? <EyeOff size={18} /> : <Eye size={18} />}
                            </div>
                            <div
                                onClick={HeardClick}
                                className='flex justify-center items-center p-2 bg-white rounded-full'>
                                {isHeardClick ? <HeartHandshake size={18} color='red' /> : <Heart size={18} />}
                            </div>
                        </div>
                    </div>
                    <div className='cardbtn absolute bottom-0 left-0 w-full'>
                        <button onClick={handleAddToCart} className="bg-black text-sm w-full flex items-center justify-center gap-3 text-white py-2 px-4 rounded">
                            <ShoppingCart size={18} />
                            Add to Cart
                            <Toaster
                                position="top-right"
                                reverseOrder={false}
                            />
                        </button>

                    </div>

                </div> */}
                <div className='mt-2 text-[14px]'>
                    <p className='font-semibold text-[18px]'>{name}</p>
                    <div className='flex gap-4 mt-1'>
                        <p className='text-[#dc4b4b]'>${formattedDiscountAmount}</p>
                        {ShowDiscountChip && (
                            <p className='text-[#BFBFBF] line-through'>${formattedTotalPrice}</p>
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <div className="star flex mt-2">
                                <Image alt='img' src='/star.svg' height={15} width={15} />
                                <Image alt='img' src='/star.svg' height={15} width={15} />
                                <Image alt='img' src='/star.svg' height={15} width={15} />
                                <Image alt='img' src='/star.svg' height={15} width={15} />
                                <Image alt='img' src='/star.svg' height={15} width={15} />
                            </div>
                            <div>
                                <p className='text-[#BFBFBF] mt-1'>(99)</p>
                            </div>
                        </div>
                        <div>
                            <button

                                onClick={handleAddToCart} className="bg-blue-400  text-white py-2 px-3 rounded">
                                <ShoppingCart size={18} />

                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllCards;
