import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '../reactRoute/RouteConstants'
import { CartIcon } from '../icons/SimpleIcons'

const Navbar = () => {

    const location = useLocation();

    const fnActiveClassName =(route)=>{
        return `mx-[15px] ${route == location.pathname ? 'text-[red]' : 'text-[black]'}`;
    };

  return (
    <div className='p-[25px] flex justify-around'>
        
        <div/>

        <div>
        <NavLink className={fnActiveClassName(ROUTES.home)} to={ROUTES.home} >
            Home
        </NavLink>
        <NavLink className={fnActiveClassName(ROUTES.cart)} to={ROUTES.cart} >
            Cart
        </NavLink>
        <NavLink className={fnActiveClassName(ROUTES.about)} to={ROUTES.about} >
            About
        </NavLink>
        <NavLink className={fnActiveClassName(ROUTES.contact)} to={ROUTES.contact} >
            Contacts
        </NavLink>
        <NavLink className={fnActiveClassName(ROUTES.profile)} to={ROUTES.profile} >
            Profile
        </NavLink>
        </div>

        <div>
            <CartIcon/>
        </div>

    </div>
  )
}

export default Navbar