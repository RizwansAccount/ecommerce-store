import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproduct, selectedCartSelector } from './redux/CartReducer'
import { DATA } from './data'

const App = () => {
  const cartData = useSelector(selectedCartSelector);
  const dispatch = useDispatch();

  return (
    <>
    {DATA.map((prod)=>{
      return (
      <>
          <p onClick={()=> dispatch(addproduct(prod)) } >{prod?.name}</p>
        </>
      )
    })}
    {cartData?.map((prod)=>{
      console.log(prod)
      return (
        <>
          <p>{prod?.name}</p> {prod?.quantity}
        </>
      )
    })}
    </>
  )
}

export default App