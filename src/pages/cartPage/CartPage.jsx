import React from 'react'
import { useSelector } from 'react-redux'
import { selectedCartSelector } from '../../redux/CartReducer';
import { DATA } from '../../data';
import { AddIcon, MinusIcon } from '../../icons/SimpleIcons';

const CartPage = () => {
  // const cartItems = useSelector(selectedCartSelector);
  return (
    <div className='px-[24px] sm:px-[5.6vw] flex flex-col items-center gap-[32px] py-[42px]'>

      <h1 className='text-[32px] font-semibold'>My <span className='text-primary'>Cart</span></h1>

      <div className='flex flex-col gap-[24px] w-full'>

        <div className='grid grid-cols-7 items-center mt-[32px]'>
          <h1 className='text-[#333] text-[14px] font-semibold col-start-1 col-end-5' >Product</h1>
          <h1 className='text-[#333] text-[14px] font-semibold'>Quantity</h1>
          <h1 className='text-[#333] text-[14px] font-semibold'>Price</h1>
          <h1 className='text-[#333] text-[14px] font-semibold'>Sub Total</h1>
        </div>

        <hr className='border-[#E1E2E7]' />

        {DATA?.map((cart, i) => {
          return (
            <>
              <div key={i} className='grid grid-cols-7 items-center'>

                <div className='flex items-center col-start-1 col-end-5 gap-[12px]'>

                  <img src={cart?.img_url} className='h-[124px] w-[136px] object-cover' />

                  <div className='flex items-start gap-[12px] flex-col'>

                    <div className="flex flex-col gap-[4px]">
                      <h3 className='text-[18px] text-[#333] font-[600]'>Air Brags Sneakers</h3>
                      <p className='text-[#7D8494] text-[12px]'>Color : Green</p>
                    </div>

                    <p className='text-[12px] font-semibold text-primary cursor-pointer hover:opacity-60 transition-all'> Remove </p>

                  </div>

                </div>


                <div className='rounded-[4px] h-[32px] w-[62px] flex items-center justify-around border-[1px] border-[#E3E4E8]' >
                  <span className='cursor-pointer'> <AddIcon /> </span> <span className='text-primary font-semibold' >{'1'}</span> <span className='cursor-pointer'> <MinusIcon /> </span>
                </div>

                <span className='' >{'$80.00'}</span>

                <span className='text-primary' >{'$80.00'}</span>

              </div>
              <hr className='border-[#E1E2E7]' />
            </>
          )
        })}

      </div>

    </div>
  )
}

export default CartPage