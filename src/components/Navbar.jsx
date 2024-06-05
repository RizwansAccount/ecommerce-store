import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../reactRoute/RouteConstants'
import { AppLogo, CartIcon, HomeIcon } from '../icons/SimpleIcons'
import { useSelector } from 'react-redux'
import { selectedCartSelector } from '../redux/CartReducer'

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const cartItems = useSelector(selectedCartSelector);

    const fnGetTotalQuantity =()=>{
      let total = 0;
      cartItems?.forEach((item)=>{ total += item?.quantity ? 1 : 0 })
      return total
    };

    const fnIsActive =(route)=> location.pathname == route ? ' #2D58C8' : 'black';

  return (
    <div className='sm:px-[4vw] py-[24px] flex justify-between px-[24px]' >
        <AppLogo onClick={()=> navigate(ROUTES.home)} />

        <div className='flex gap-[16px]'>
            <HomeIcon onClick={()=> navigate(ROUTES.home)} color={fnIsActive(ROUTES.home)} />
            <CartIcon onClick={()=> navigate(ROUTES.cart)} color={fnIsActive(ROUTES.cart)} counter={fnGetTotalQuantity()}  />
        </div>

    </div>
  )
}

export default Navbar