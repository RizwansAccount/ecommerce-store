import React from 'react';
import ViewCityCards from '../../components/ViewCityCards';

const HomePage = () => {
  return (
    <>
      <img className='h-[500px] w-full object-cover' src={'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      
      <div className='my-[24px]'>
        <h1 className='text-[32px] mt-[12px] mb-[24px] pl-[22px] font-bold'>You prepare the food, we handle the rest</h1>
        <div className='h-[400px] overflow-hidden flex flex-col justify-center' >
          <img className=' h-auto w-full object-cove' src='https://images.deliveryhero.io/image/foodpanda/home-vendor-pk.jpg?width=1200&height=768' />
        </div>
      </div>

      <div className='my-[24px]' >

        <h1 className='text-[32px] mt-[12px] mb-[24px] pl-[22px] font-bold' >Find us in these citites and many more!</h1>
        <ViewCityCards/>
      </div>

    </>
  )
}

export default HomePage