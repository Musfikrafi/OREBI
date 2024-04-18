import React from 'react'
import Container from '../componants/Container'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Error = () => {
  return (
   <>
  <Container>
  <h2 className=' font-dm font-bold text-[200px]'>404</h2>
  <p className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-[644px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
 <div className='w-[644px] relative pt-[25px]'>
 <input type="text" className='w-full border-2 border-[#F0F0F0]  h-[70px] px-3 placeholder:text-[#767676] placeholder:font-dm' placeholder='Type to Search' />
 
 <div className=' absolute top-[50%] right-5 traslate-y-[-50%]'>
    <CiSearch/>
 </div>
 </div>
 
 <div className='pb-10 mt-[40px]'>
    <Link to="/">
    <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF]'>Back to Home</span>
    </Link>
 </div>


 
  </Container>
   </>
  )
}

export default Error