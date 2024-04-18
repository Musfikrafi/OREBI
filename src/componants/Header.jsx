import React, { useState } from 'react'
import Logo from '../aseets/Logo.png'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
  let [show, setShow] = useState(false)

  let handleShow = () =>{
    setShow(!show)
  }
  return (
    <section id='header'>
<Container>
   <Flex className=' items-center py-[32px]'>
        <div className='lg:mr-[543px]'>
            <img src={Logo} alt="Logo" />
        </div>
        <div className=' justify-center'>
        <ul className={`lg:flex gap-x-8 absolute top-0 left-0 lg:static ${ show == true ? " bg-[#F5F5F5] top-[65px] w-full text-center z-[65] duration-300 ease-in-out":" !top-[-250px] w-full"}`}>
            <li className='py-2 lg:static'><a  className=' font-dm text-[14px] font-normal text-[#767676] hover:text-[#262626] hover:font-medium'><Link to="/">Home</Link></a></li>
            <li className='py-2 lg:static'><a  className=' font-dm text-[14px] font-normal text-[#767676] hover:text-[#262626] hover:font-medium'><Link to="/product">Shop</Link></a></li>
            <li className='py-2 lg:static'><a className=' font-dm text-[14px] font-normal text-[#767676] hover:text-[#262626] hover:font-medium'><Link to="/about">About</Link></a></li>
            <li className='py-2 lg:static'><a  className=' font-dm text-[14px] font-normal text-[#767676] hover:text-[#262626] hover:font-medium'><Link to="/contacts">Contacts</Link></a></li>
            <li className='py-2 lg:static'><a  className=' font-dm text-[14px] font-normal text-[#767676] hover:text-[#262626] hover:font-medium'>Journal</a></li>
          </ul>

        </div>

        <div className=' lg:hidden ml-[330px] mt-[-20px]'onClick={handleShow} >
          {show ? <RxCross2/> : <FaBars/>}
        
       
        </div>
    </Flex>
</Container>
    </section>
  )
}

export default Header