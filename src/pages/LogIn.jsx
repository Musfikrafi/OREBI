import React from 'react'
import Container from '../componants/Container'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
   <>
    <Container>
   <div className=' my-8'>
    <h1 className='font-dm font-bold text-[49px] text-[#262626] leading-[63.8px]'>Login</h1>
    <span className=' font-dm text-[16px] font-normal leading-[15.62px] pb-[50px] px-4'> <Link to="/">Home</Link> / Login</span>
  </div>

  <div className='mb-[129px] border-b-2 border-[#F0F0F0] pb-[40px]'>
  <h1 className='font-dm font-bold text-[39px]  text-[#262626] leading-[50px]'>Returning Customer</h1>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%]  '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Email address</label> <br />
  <input type="text" placeholder='company@domain.com' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]'  />
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Password</label> <br />
  <input type="password" placeholder='—' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>
 
 <div className='mt-[76px] mb-[26px]'>
  <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] border-2 border-[#262626] hover:bg-[white] hover:text-[#262626] hover:duration-[0.5s] cursor-pointer'><Link to="/login">Log in</Link></span>
  </div>
</div>



<div className='w-[50%]'>
<h1 className='font-dm font-bold text-[39px]  text-[#262626] leading-[50px] pb-[38px]'>Returning Customer</h1>
<p className='font-dm font-normal text-[16px]  text-[#767676] leading-[30px] pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
<div className=' mb-[140px]'>
  <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] border-2 border-[#262626] hover:bg-[white] hover:text-[#262626] hover:duration-[0.5s] cursor-pointer'><Link to="/singup">Continue</Link></span>
  </div>


</div>

   </Container>
   </>
  )
}

export default LogIn