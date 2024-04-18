import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { LuGitCompare } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  return (
  <>
    {post.map((item)=>(
      
<div className='h-[365px] lg:w-[32%] justify-center items-center'>

<Link to={`/product/${item.id}`}>
<div className=' relative group'>
<img src={item.thumbnail} alt="" className='h-[300px] w-full'/>

<div className=' absolute top-[20px] left-[20px] h-[32px] w-[92px] bg-[#262626]'>
     <p className=' font-dm font-bold text-[14px] leading-[18.23px] text-[#FFFF] text-center items-center pt-[7px]'>New</p>
  </div> 

  <div className=' absolute right-0 bottom-0 w-full h-[0px] bg-[#ffffffe5] group-hover:h-[156px] duration-300 ease-out overflow-hidden items-end'>

<div className='flex items-center gap-x-2 justify-end pr-[20px] py-2'>
  <p className=' font-dm font-medium text-[16px] text-[#767676]  hover:font-bold hover:text-black cursor-pointer'>Add to Wish List</p>
   <FaHeart/>
</div>

<div className='flex items-center gap-x-2 justify-end pr-[20px] py-2'>
  <p className=' font-dm font-medium text-[16px] text-[#767676] hover:font-bold hover:text-black cursor-pointer'>Compare</p>
   <LuGitCompare/>
</div>

<div className='flex items-center gap-x-2 justify-end pr-[20px] py-2'>
  <p className=' font-dm font-medium text-[16px] text-[#767676]  hover:font-bold hover:text-black cursor-pointer'>Add to Cart</p>
   <IoCart/>
</div>
</div>
</div>
              

  <div className=' flex justify-between pt-[24px] pb-[10px]'>
    <h3 className='font-dm font-bold text-[20px]'>{item.title}</h3>
    <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px]'>{item.price}$</p>
  </div>
  <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px] opacity-[0.5]'>Black</p>
      </Link>


 </div>
   
      ))}
  </>
  )
}

export default Post