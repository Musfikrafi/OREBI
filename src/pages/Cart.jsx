import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../componants/Container'
import { RxCross2 } from "react-icons/rx";
import { IoCaretDown } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { incrimentProduct, removeProduct,decrimentProduct } from '../componants/slice/singleSlice';

const Cart = () => {
  let data = useSelector((state) => state.single.cartItem)
  let dispatch = useDispatch()

  const { totalPrice, totalQuantity } = data.reduce((acc, item) => {
    acc.totalPrice  += item.price * item.qun
    acc.totalQuantity += item.qun
    return acc;
  }, {totalPrice:0, totalQuantity:0});
  
  
 
  return (
  <>
 <Container>
 <div className='mb-[120px]'>
    <h1 className='font-dm font-bold text-[49px] text-[#262626] leading-[63.8px]'>Cart</h1>
    <span className=' font-dm text-[12px] font-normal leading-[15.62px] pb-[50px]'> <Link to="/">Home</Link> / Cart</span>

  </div>

  <div className=' w-full h-auto border-2 border-[#F0F0F0] mb-[117px]'>
    <div className='w-full h-[25%] bg-[#F5F5F3] border-b-2 border-[#F0F0F0]'> 
    <ul className='flex px-5 items-center py-8'>
        <li className=' px-3 pr-[340px] items-center font-dm font-bold text-[16px] text-[#262626]'>Product</li>
        <li  className=' px-3 pr-[340px] items-center font-dm font-bold text-[16px] text-[#262626]'>Price</li>
        <li className=' px-3 pr-[340px] items-center font-dm font-bold text-[16px] text-[#262626]'>Quantity</li>
        <li className=' px-3 pr-[340px] items-center font-dm font-bold text-[16px] text-[#262626]'>Total</li>
    </ul>
    </div>
   <div>

{data.map((item,index)=>(
  <div className='w-full h-[50%] bg-[#FFFF] border-b-2 border-[#F0F0F0] flex'>

<div className='w-[25%] h-full flex py-8 px-3  items-center'>
   <RxCross2 onClick={()=>dispatch(removeProduct(index))} className='mr-[30px] '/>
<img src={item.thumbnail} alt="" className='w-[80px] h-[80px] mr-[20px]' />
<p className='font-dm font-bold text-[16px] text-[#262626]'>{item.title}</p>
</div>

<div className='w-[25%] h-full py-16 px-20 items-center'>
  <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>${item.price}</h2>
</div>

<div className='w-[25%] h-full'>
<div className='flex items-center  py-16 px-12'>
<div className='flex justify-between items-center px-3  h-[36px] w-[139px] border-2 border-[#F0F0F0]'>
<button onClick={()=>dispatch(incrimentProduct(index))} className='text-[16px] font-normal font-dm text-[#767676] leading-[30px]'>+</button>
<div className=' text-[16px] font-normal font-dm text-[#767676] leading-[30px]'>{item.qun}</div>
<button onClick={()=>dispatch(decrimentProduct(index))} className='text-[16px] font-normal font-dm text-[#767676] leading-[30px]'>-</button>
</div>
</div>
</div>

<div className='w-[25%] h-full py-16 px-24 items-center'>
  <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>${item.price * item.qun}</h2>
</div>
</div>
))}

  

<div className='w-full h-[25%] border-1 border-[#F0F0F0] flex'>
   
 <div className='w-[50%] h-full flex'>
<div className='flex w-[255px] h-[50px] border-2 border-[#EAEAEA] py-2 px-3 my-4 mx-4 justify-between'>
   <p className=' font-dm font-normal text-[16px] text-[#767676] '>SIZE</p>
  <IoCaretDown className=' my-1'/>
</div>
<p className='px-3 py-8 font-dm text-[14px] font-bold text-[#262626] '>Apply coupon</p>
 </div>

 <div className='w-[50%] h-full text-end items-center'>
<h2 className=' py-8  font-dm text-[14px] font-bold text-[#262626] px-3'>Update cart</h2>
 </div>
</div>
   </div>
  </div>

<div className=''>
<div className=' border-2 border-[#F0F0F0] justify-end ml-[58%] flex mb-[30px] '> 
     <div className='w-[50%] h-full border-r-2 border-[#F0F0F0] '>
        <div className='w-full h-[50%] border-b-2 border-[#F0F0F0]'>
            <h2 className='px-3 py-3 font-dm text-[16px] font-bold  '>Total Qunatity</h2>
        </div>
        <p className='px-3 py-3 font-dm text-[16px] font-bold  '>Total</p>
     </div>
     <div className='w-[50%] h-full border-r-2 border-[#F0F0F0]'>
        <div className='w-full h-[50%]  border-b-2 border-[#F0F0F0]'>
        <p className='px-3 py-3 font-dm text-[16px] font-normal text-[#767676]'>{totalQuantity} Items</p>
        </div>
        <h2 className='px-3 py-3 font-dm text-[16px] font-normal text-[#767676]'>${totalPrice}</h2>
     </div>
     
  </div>

  <div className='ml-[83%] mb-[140px] '>
  <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] border-2 border-[#262626] hover:bg-[white] hover:text-[#262626] hover:duration-[0.5s] cursor-pointer'><Link to="/checkout">Proceed to Checkout</Link></span>
  </div>
</div>
 </Container>
  </>
  )
}

export default Cart