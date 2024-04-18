import React from 'react'
import Container from './Container'
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa6";
import Logo from '../aseets/Logo.png'

const Footer = () => {
  return (
    <div>
          <div className='w-full lg:h-[374px] h-full bg-[#F5F5F3]'>
          <Container>
            <div className='w-full h-full lg:flex pt-[55px]'>
                    <div className='flex lg:w-[50%]  h-full justify-between'>
                    <div className='lg:w-[16.67%] h-full'>
                           <ul className=''>
                            <li className=' py-[10px]'><a href="#" className=' font-dm font-bold text-[16px] leading-[23px] text-[#262626]'> MENU</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Home</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Shop</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> About</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Contact</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Journal</a></li>
                            </ul>     
                            <div className=' flex gap-x-[31px] pt-[45px] pb-[30px]'>
                                  <FaFacebookF className=''/>
                                  <FaLinkedinIn/>
                                  <FaInstagram/>

                            </div>
                    </div> 



                     <div className='lg:w-[16.67%] h-full'>
                     <ul className=''>
                            <li className=' py-[10px]'><a href="#" className=' font-dm font-bold text-[16px] leading-[23px] text-[#262626]'> Shop</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Category 1</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Category 2</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Category 3</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Category 4</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Category 5</a></li>
                            </ul>    
                    </div> 
                     <div className='lg:w-[16.67%] h-full'>
                     <ul className='lg:pl-0 pl-[10px]'>
                            <li className=' py-[10px]'><a href="#" className=' font-dm font-bold text-[16px] leading-[23px] text-[#262626]'> HELP</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Privacy Policy</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Terms & Conditions</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Special E-shop</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Special E-shop</a></li>
                            <li className=' py-[6px]'><a href="#" className='font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'> Secure Payments</a></li>
                            </ul>   
                    </div> 
                    </div>
                   
                   
                    <div className='flex lg:w-[50%]  h-full justify-between'>
                    <div className='lg:w-[20%] w-[50%] lg:ml-[100px] h-full'>
                                 <p className=' font-dm font-bold text-[16px] leading-[27px]'>(052) 611-5711 </p>
                                 <h2 className=' font-dm font-bold text-[16px] leading-[27px] pb-[15px]'>company@domain.com</h2>
                                 <p className=' font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</p>
                    </div>
                    
                    <div className='lg:w-[30%] w-[50%] h-full text-center'>
                                            <img src={Logo} alt="" className='h-[28.51px] w-[121.9px] lg:mb-[211px] mx-auto' />
                                            <p className=' font-dm font-normal text-[14px] leading-[23px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                    </div>
            </div>
       </Container>
</div>
       
    </div>
  )
}

export default Footer