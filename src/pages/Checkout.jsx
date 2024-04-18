import React from 'react'
import Container from '../componants/Container'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';


const Checkout = () => {

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
    <div className=' my-8'>
    <h1 className='font-dm font-bold text-[49px] text-[#262626] leading-[63.8px]'>Checkout</h1>
    <span className=' font-dm text-[16px] font-normal leading-[15.62px] pb-[50px] px-4'> <Link to="/">Home</Link> / Checkout</span>
  </div>
  <div className="my-20">
  <p className='font-dm  text-[16px] font-normal text-[#767676] leading-[30px]'>Have a coupon? <span className='font-dm  text-[16px] font-normal text-[#262626] leading-[30px]'>Click here to enter your code</span></p>
  </div>


<div className='mb-[129px]'>
  <h1 className='font-dm font-bold text-[39px]  text-[#262626] leading-[50px]'>Billing Details</h1>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%]  '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>First Name *</label> <br />
  <input type="text" placeholder='First Name' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]'  />
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Last Name *</label> <br />
  <input type="text" placeholder='Last Name' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>

<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Companye Name (optional)</label> <br />
  <input type="text" placeholder='Company Name' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>

<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Country *</label> <br />
  <input type="text" placeholder='Please select' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>

<div className='w-full h-[119px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Street Address *</label> <br />
  <input type="text" placeholder='House number and street name' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
<input type="text" placeholder='Apartment, suite, unit etc. (optional)' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />

</div>

<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Town/City *</label> <br />
  <input type="text" placeholder='Town/City' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>
<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>County (optional)</label> <br />
  <input type="text" placeholder='Please select' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>
<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Post Code *</label> <br />
  <input type="text" placeholder='Post Code' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>

<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Phone *</label> <br />
  <input type="text" placeholder='Phone' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>

<div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Email Address *</label> <br />
  <input type="text" placeholder='E-mail' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>
</div>

<div className='mb-[129px]'>
  <h2  className='font-dm  text-[49px] font-bold text-[#262626] leading-[50px] py-[42px]'>Additional Information</h2>
  <div className='w-full h-[68px] mb-[34px]' >
<form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Other Notes (optional)</label> <br />
  <input type="text" placeholder='Notes about your order, e.g. special notes for delivery.' className=' border-b-2 border-[#F0F0F0] w-full h-[86px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
</div>
</div>
<div>
<h2  className='font-dm  text-[39px] font-bold text-[#262626] leading-[50px] py-[42px]'>Your Order </h2>
<div className=''>
<div className=' border-2 border-[#F0F0F0] w-[40%] flex mb-[30px] '> 
     <div className='w-[50%] h-full border-r-2 border-[#F0F0F0] '>
        <div className='w-full h-[50%] border-b-2 border-[#F0F0F0]'>
            <h2 className='px-3 py-3 font-dm text-[16px] font-bold  '> Product</h2>
        </div>
        <div className='w-full h-[50%] border-b-2 border-[#F0F0F0]'>
            <h2 className='px-3 py-3 font-dm text-[16px] font-bold  '>Product name x{totalQuantity}</h2>
        </div>
        <div className='w-full h-[50%] border-b-2 border-[#F0F0F0]'>
            <h2 className='px-3 py-3 font-dm text-[16px] font-bold  '>Subtotal</h2>
        </div>
        <p className='px-3 py-3 font-dm text-[16px] font-bold  '>Total</p>
     </div>
     <div className='w-[50%] h-full border-r-2 border-[#F0F0F0]'>
        <div className='w-full h-[50%]  border-b-2 border-[#F0F0F0]'>
        <p className='px-3 py-3 font-dm text-[16px] font-normal text-[#767676]'> Total</p>
        </div>
        <div className='w-full h-[50%]  border-b-2 border-[#F0F0F0]'>
        <p className='px-3 py-3 font-dm text-[16px] font-normal text-[#767676]'>{totalQuantity} Items</p>
        </div>
        <div className='w-full h-[50%]  border-b-2 border-[#F0F0F0]'>
        <p className='px-3 py-3 font-dm text-[16px] font-normal text-[#767676]'>${totalPrice}</p>
        </div>
        <h2 className='px-3 py-3 font-dm text-[16px] font-normal text-[#767676]'>${totalPrice}</h2>
     </div>
     
  </div>

  <div className='mb-[140px] '>
  <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] border-2 border-[#262626] hover:bg-[white] hover:text-[#262626] hover:duration-[0.5s] cursor-pointer'><Link to="/checkout">Proceed to Checkout</Link></span>
  </div>
</div>

</div>
    </Container>
    </>
  )
}

export default Checkout