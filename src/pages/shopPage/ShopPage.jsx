import React from 'react'

const ShopPage = () => {
  return (
    <div className='h-[170px] rounded-[15px] w-fit flex items-center p-[10px] bg-[#FFFFFF] shadow-lg' >

        <img className='h-full rounded-[15px]' src='https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D' />

        <div className='h-full w-full flex flex-col justify-around pl-[10px] pr-[30px] '>

            <div className=''>

              <p className='font-semibold text-[16px]'>Floral Print Wrap Dress</p>
              <p className='font-medium text-[18px] text-[#FF9A0B]' >$21.50</p>

            </div>

            <div className=''>

              <p className='text-[14px]' > Size <span className='font-bold' >. 42</span> </p>
              <p className='text-[14px]' > Qty <span className='font-bold' >. 1</span> </p>

            </div>

        </div>

    </div>
  )
}

export default ShopPage