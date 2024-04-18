import React from 'react'
import Container from '../componants/Container'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <>
<Container>
<div className=' my-8'>
    <h1 className='font-dm font-bold text-[49px] text-[#262626] leading-[63.8px]'>Contacts</h1>
    <span className=' font-dm text-[12px] font-normal leading-[15.62px] pb-[50px]'> <Link to="/">Home</Link> / Contacts</span>
  </div>
  <div className='w-[680px] mt-[80px] mb-[30px]'>
    <h2  className='font-dm font-bold text-[39px] text-[#262626] leading-[50.78px]'>Fill up a Form</h2>
<form action="" className='pt-[42px]'>
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px]'>Name</label> <br />
  <input type="text" placeholder='Your name here' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px]' />
</form>

<form action="" className='pt-[42px]'>
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px]'>Email</label> <br />
  <input type="text" placeholder='Your email here' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px]' />
</form>

<form action="" className='pt-[42px]'>
  <label htmlFor="message" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px]'>Message</label> <br />
  <textarea name="text" className='w-full h-[138px]  border-b-2 border-[#F0F0F0] font-dm font-normal text-[16px] text-[#767676] leading-[18.23px] pt-[10px]'>Your message here</textarea>
</form>
  </div>
<div className='mb-[123px]'>
<button  className='font-dm font-bold text-[16px] py-[14px] px-[38px] bg-[#262626] text-[#FFFFFF] h-[50px] w-[200px] border-2 border-[#262626] hover:bg-[white] hover:text-[#262626] hover:duration-[0.5s]'>Post</button>
</div>

<div className='w-full h-[527px] mb-[140px]'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.48749962428!2d90.40280912793453!3d23.749663784907394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86fbecb232f%3A0xa149b9ede02b4b86!2sKhilgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710571971520!5m2!1sen!2sbd" width="100%" height="527"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</Container>
    </>
  )
}

export default Contacts