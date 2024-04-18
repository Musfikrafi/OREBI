import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingCart,FaUser,} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
const Navber = () => {
  let data = useSelector ((state)=> state.single.cartItem)
    let [cartShow,setcartShow] = useState(false)
    let [accShow,setaccShow] = useState(false)
    let [storeShow,setstoreShow] = useState(false)
let CategoryRef = useRef()
let accRef = useRef()
let StoreRef = useRef()


useEffect(()=>{
   document.addEventListener("click",(e)=>{
if(CategoryRef.current.contains(e.target) == true){
    setcartShow(!cartShow)
}else{
    setcartShow(false)
}
 
}) 
},[cartShow])

useEffect(()=>{
   document.addEventListener("click",(e)=>{
if(accRef.current.contains(e.target)== true){
  setaccShow(!accShow)
}else{
  setaccShow(false)
}
 
}) 
},[accShow])

useEffect(()=>{
   document.addEventListener("click",(e)=>{
if(StoreRef.current.contains(e.target) == true){
  setstoreShow(!storeShow)
}else{
  setstoreShow(false)
}
 
}) 
},[storeShow])

  const { totalPrice, totalQuantity } = data.reduce((acc, item) => {
    acc.totalPrice  += item.price * item.qun
    acc.totalQuantity += item.qun
    return acc;
  }, {totalPrice:0, totalQuantity:0});
  
  return (
    <section id='navber' className='bg-[#F5F5F3] py-[23px]'>
    <Container>
      <Flex>



        <div className="w-full lg:w-[25%] relative">
        <div className='flex items-center gap-x-4 py-2' ref={CategoryRef}>
        <RiMenu3Fill/>
        <a href='#' className=' font-dm font-semibold text-[14px] text-[#262626] pointer-events-auto'>Shop by Category</a>
        </div>

{cartShow && 
 <div className=' absolute top-[42px] left-0 z-50'>
 <ul className='bg-[#262626] '>
     <li className='h-[50px] w-[263px] py-3 hover:pl-6 duration-300 ease-out'><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:text-[#FFF] hover:font-bold' >Accesories</a></li>
     <li className='h-[50px] w-[263px] py-3 hover:pl-6 duration-300 ease-out'><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:text-[#FFF] hover:font-bold' >Furniture</a></li>
     <li className='h-[50px] w-[263px] py-3 hover:pl-6 duration-300 ease-out'><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:text-[#FFF] hover:font-bold' >Electronics</a></li>
     <li className='h-[50px] w-[263px] py-3 hover:pl-6 duration-300 ease-out'><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:text-[#FFF] hover:font-bold' >Clothes</a></li>
     <li className='h-[50px] w-[263px] py-3 hover:pl-6 duration-300 ease-out'><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:text-[#FFF] hover:font-bold' >Bags</a></li>
     <li className='h-[50px] w-[263px] py-3 hover:pl-6 duration-300 ease-out'><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:text-[#FFF] hover:font-bold' >Home appliances</a></li>
     
     </ul>

</div>
}
       
        </div>
   




        <div className=' w-full lg:w-[50%] relative'>

            <input type="search" className='lg:w-[601px] w-full h-[50px] bg-[#FFFFFF] border-[1px] border-solid  border-transparent font-dm px-[21px]' placeholder='Search Products....' />
            <div className=' absolute top-[31%] lg:right-[24%] right-[10%] z-50'>
                <FaSearch />
            </div>
        </div>




        <div className=' w-full lg:w-[25%] z-50'>
         <div className='flex py-2 lg:justify-end lg:items-center items-start' >
         <div className='flex px-10 relative' ref={accRef}>
         <FaUser/>
         <IoMdArrowDropdown/>
          </div>

          { accShow && 
            <div className=' absolute top-[150px] '>
            <ul className='bg-[#262626]'>
              <li className='h-[50px] w-[200px] py-3 hover:pl-6 duration-300 ease-out  hover:bg-white '><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:font-bold hover:text-black'>My Account</a></li>
              <li className='h-[50px] w-[200px] py-3 hover:pl-6 duration-300 ease-out  hover:bg-white '><a href="#" className=' font-dm font-normal text-[#b5b4b4ee] text-[14px] px-6 hover:font-bold  hover:text-black'>Log Out</a></li>
            </ul>
          </div>
            
          }



          <div className='relative' ref={StoreRef}>
          <FaShoppingCart/>
          </div>
{storeShow &&

<div className='w-[360px] h-auto border-[1px] border-solid border-[#F0F0F0] bg-black absolute top-[150px] right-0'>
  {data.map((item)=>(
    <div className='h-[50%] w-full bg-[#F5F5F3] flex'>
<div className='w-[30%]  h-fulltext-center '>
<img src={item.thumbnail} alt=""  className='w-[80px] h-[80px] items-center mx-auto mt-[20px]'/>
</div>

<div className='w-[60%] h-full pl-[10px] z-50'>
<h5 className='pt-[37px] font-dm text-[16px] font-bold text-[#262626]'>{item.title}</h5>
<p className='pt-[6px] font-dm text-[14px] font-semibold text-[#262626]'>${item.price}</p>
</div>
<div className='w-[10%] h-full pt-[60px]'>
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
<path d="M6.89545 5L9.73835 2.1571C10.0872 1.80824 10.0872 1.24261 9.73835 0.893466L9.10653 0.261648C8.75767 -0.0872159 8.19205 -0.0872159 7.8429 0.261648L5 3.10455L2.1571 0.261648C1.80824 -0.0872159 1.24261 -0.0872159 0.893466 0.261648L0.261648 0.893466C-0.0872159 1.24233 -0.0872159 1.80795 0.261648 2.1571L3.10455 5L0.261648 7.8429C-0.0872159 8.19176 -0.0872159 8.75739 0.261648 9.10653L0.893466 9.73835C1.24233 10.0872 1.80824 10.0872 2.1571 9.73835L5 6.89545L7.8429 9.73835C8.19176 10.0872 8.75767 10.0872 9.10653 9.73835L9.73835 9.10653C10.0872 8.75767 10.0872 8.19205 9.73835 7.8429L6.89545 5Z" fill="#262626"/>
</svg>
</div>
</div>
  ))}

  <div className='h-[50%] w-full bg-[#FFF] flex pl-[20px] relative'>
 <h2 className='pt-[14px] font-dm text-[14px] font-semibold text-[#262626]'>Subtotal: ${totalPrice}</h2>

 <div className=' flex absolute top-[50px] gap-x-6'>
    <button className=' w-[148px] h-[50px]  border-[1px] border-solid border-[#262626] bg-[#262626] font-dm text-[14px] font-semibold text-[#fff] hover:bg-transparent hover:text-[black]'><Link to="/cart">View Cart</Link></button>
   
   <button className=' w-[148px] h-[50px]  border-[1px] border-solid border-[#262626] bg-[#262626] font-dm text-[14px] font-semibold text-[#fff] hover:bg-transparent hover:text-[black]'>Checkout</button>
   
   
 </div>
</div>

</div>



}

        </div>
         </div>


      </Flex>
    </Container>
    </section>
  )
}

export default Navber