import React from 'react'
import { AddIcon, MinusIcon } from '../icons/SimpleIcons'
import RadioButton from './RadioButton'

const ViewProductCard = () => {
  return (
    <div className='absolute inset-0 bg-[#00000040] flex items-center justify-center'>

      <div className='rounded-[20px] bg-[#FFF] max-w-[1060px] max-lg:max-w-[600px] max-lg:m-[24px] overflow-hidden grid lg:grid-cols-2 grid-cols-1 max-h-[700px] overflow-y-scroll'>

        <img src='/images/product1.png' className='lg:h-full max-lg:h-[300px] w-full object-cover object-center' />

        <div className='p-[54px] flex flex-col gap-[32px] w-full max-lg:p-[24px] max-lg:gap-[24px]'>

          <div className='flex flex-col gap-[16px] max-lg:gap-[8px]'>

            <h1 className='text-[#333] text-[24px] font-[600]'>Air Bargs Sneaker</h1>
            <p className='text-primary'>$80.00</p>

          </div>

          <div className='flex items-center gap-[32px] max-lg:gap-[8px]'>

            <span className='flex items-center'>
              <MinusIcon /> {'1'} <AddIcon />
            </span>

            <div className='flex items-center gap-[20px]'>

              <RadioButton color='#181516' active />

              <RadioButton color='#BB885C' />

              <RadioButton color='#103E2D' />

              <RadioButton color='#2E4E3C' />

            </div>

          </div>

          <div className='flex flex-col items-start gap-[16px]  max-lg:gap-[8px]'>

            <h3 className='text-primary text-[18px]'>Description :-</h3>

            <p className='text-[14px] text-[#BBB]'>
              {"The Nike Air Max 270 is renowned for its stylish design and superior comfort. It features Nike’s largest-ever Air unit in the heel, providing a soft, cushioned ride. The neoprene stretch bootie construction offers a snug, sock-like fit that adapts to your foot. Its breathable mesh upper keeps your feet cool, while the sleek lines and bold colorways ensure you stand out. Ideal for both casual wear and light exercise, the Air Max 270 combines functionality with a modern aesthetic. Whether you're walking around the city or heading to a casual event, this shoe provides both comfort and style."}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ViewProductCard