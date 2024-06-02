import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../reactRoute/RouteConstants'
import { AppLogo, CartIcon, HomeIcon } from '../icons/SimpleIcons'

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

  return (
    <div className='px-[32px] pt-[18px] flex justify-between' >
        <AppLogo/>

        <div className='flex gap-[16px]' >
            <HomeIcon/>
            <CartIcon/>
        </div>

    </div>
  )
}

export default Navbar