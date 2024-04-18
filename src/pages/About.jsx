import React from 'react'
import Container from '../componants/Container'
import { Link } from 'react-router-dom'
import Aboutone from "../aseets/aboutone.png"
import Abouttwo from "../aseets/abouttwo.png"

const About = () => {
  return (
    <div>
        <Container>
        <div className=' my-8'>
    <h1 className='font-dm font-bold text-[49px] text-[#262626] leading-[63.8px]'>About</h1>
    <span className=' font-dm text-[12px] font-normal leading-[15.62px] pb-[50px]'> <Link to="/">Home</Link> / About</span>

  </div>
  <div className='w-full h-627px flex justify-between my-36'>
    <div className='w-[50%] h-[full] relative'>
    <img src={Aboutone} alt="" className=' h-[627px]'/>

    <div className=' absolute top-[85%] left-[28%]'>
    <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF]'>Our Brands</span>
    </div>
    </div>
   
    <div className='w-[50%] h-full relative'>
    <img src={Abouttwo} alt="" className=' h-[627px]'/>
    <div className=' absolute top-[85%] left-[28%]'>
    <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF]'>Our Stores</span>
    </div>
    </div>

 
  </div>
  <div className=' w-full my-32'>
<h2 className=' font-dm font-normal text-[39px] leading-[52px] text-[#262626]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
  </div>

  <div className=' w-full flex justify-between my-36'>
   <div className=' w-[31.3%] h-full'>
    <h3 className='font-dm font-bold text-[25px] leading-[36px] text-[#262626]'>Our Vision</h3>
    <p className='font-dm font-normal text-[16px] leading-[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
   </div>
   <div className=' w-[31.3%] h-full'>
    <h3 className='font-dm font-bold text-[25px] leading-[36px] text-[#262626]'>Our Story</h3>
    <p className='font-dm font-normal text-[16px] leading-[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
   </div>
   <div className=' w-[31.3%] h-full'>
    <h3 className='font-dm font-bold text-[25px] leading-[36px] text-[#262626]'>Our Brands</h3>
    <p className='font-dm font-normal text-[16px] leading-[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
   </div>
  </div>
        </Container>
    </div>
  )
}

export default About