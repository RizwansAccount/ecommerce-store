import React from 'react';
import { DATA } from '../../data';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-[48px] items-center px-[24px] sm:px-[5.6vw]'>
      <h1 className='text-[32px] font-semibold' > All <span className='text-primary'>Products</span> </h1>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[24px] w-full' >
        {DATA?.map((prod, i) => {
          return (
            <div className='w-full rounded-[12px] p-[12px] shadow-xl shadow-[#2D58C810] cursor-pointer'>
              <img className='h-[159px] w-full rounded-[12px] object-cover' src={prod?.img_url} />

              <h1 className='mt-[12px] font-semibold' >{prod?.name}</h1>
              <p className='mt-[9px] text-primary text-[15px] font-medium' >{prod?.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage