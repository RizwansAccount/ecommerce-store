import React, { useState } from 'react'
import { AddIcon, CrossIcon, MinusIcon } from '../icons/SimpleIcons'
import RadioButton from './RadioButton'
import { useDispatch } from 'react-redux'
import { addproduct } from '../redux/CartReducer'

const ViewProductCard = ({ selectedProduct, setSelectedProduct }) => {

  const dispatch = useDispatch();

  const { id, name, price, img_url, description, colors} = selectedProduct;
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [prodQuantity, setProdQuantity] = useState(1);

  const fnIncreaseQuantity =()=> setProdQuantity((pre)=> pre+1);

  const fnDecreaseQuantity =()=> {
    if(prodQuantity > 1) {
      setProdQuantity((pre)=> pre-1)
    } 
  };

  const fnAddToCart =()=>{
    const addToCartData = {id, name, price, img_url, color : selectedColor, quantity : prodQuantity };
    dispatch(addproduct(addToCartData));
    setSelectedProduct(null);
  };

  return (
    <div className='absolute inset-0 bg-[#00000040] flex items-center justify-center'>

      <div className='rounded-[20px] bg-[#FFF] relative max-w-[1060px] max-lg:max-w-[600px] max-lg:m-[24px] overflow-hidden grid lg:grid-cols-2 grid-cols-1 max-h-[700px]'>

        <div onClick={()=> setSelectedProduct(null)} style={{borderBottomLeftRadius: '20px', borderTopRightRadius : '20px'}} className='bg-primary cursor-pointer absolute right-0 top-0 p-[12px]' >
          <CrossIcon/>
        </div>

        <img src={img_url} className='lg:h-full max-lg:h-[300px] w-full object-cover object-center select-none' />

        <div className='p-[54px] flex flex-col gap-[32px] w-full max-lg:p-[24px] max-lg:gap-[24px]'>

          <div className='flex flex-col gap-[16px] max-lg:gap-[8px]'>

            <h1 className='text-[#333] text-[24px] font-[600] select-none'>{name}</h1>
            <p className='text-primary select-none'>{`$${price}`}</p>

          </div>

          <div className='flex items-center gap-[32px] max-lg:gap-[8px]'>

            <div className='rounded-[4px] h-[32px] w-[62px] flex items-center justify-around border-[1px] border-[#E3E4E8]' >
              <span onClick={()=> fnIncreaseQuantity()} className='cursor-pointer select-none'> 
                <AddIcon /> 
              </span> 
              <span className='text-primary font-semibold' >
                {prodQuantity}
              </span> 
              <span onClick={()=> fnDecreaseQuantity()} className='cursor-pointer select-none'>
                <MinusIcon /> 
              </span>
            </div>

            <div className='flex items-center gap-[20px] select-none'>

              {colors?.map((color, i)=>{
                return (
                  <RadioButton color={color} active={selectedColorIndex == i} onClick={()=> { setSelectedColor(color); setSelectedColorIndex(i)}}  />
                )
              })}

            </div>

          </div>

          <span onClick={()=> fnAddToCart()} className='bg-primary cursor-pointer text-white px-[12px] py-[8px] w-fit rounded-[6px]' >
            Add to Cart
          </span>

          <div className='flex flex-col items-start gap-[16px]  max-lg:gap-[8px]'>

            <h3 className='text-primary text-[18px] select-none'>Description :-</h3>

            <p className='text-[14px] text-[#BBB] max-le select-none'>
              {description}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ViewProductCard