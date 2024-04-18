import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Container from '../componants/Container';
import Flex from '../componants/Flex';
import { Apidata } from '../componants/ContexApi';
import Post from '../componants/Pagination/Post';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoCaretUpSharp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import PaginationNum from '../componants/Pagination/PaginationNum';


const Products = () => {
  let data = useContext(Apidata)

let [currentPage, setCurrentpage] = useState (1)
let [perPage, setparpage] = useState (9)
let lastpage = currentPage * perPage
let firstpage = lastpage - perPage
let allpage = data.slice(firstpage,lastpage)


let pageNumber = []
for(let i = 0 ; i < Math.ceil(data.length/perPage); i++){
pageNumber.push(i)
}

let paginate =(pageNumber)=>{
  setCurrentpage(pageNumber + 1)
}
let next =() =>{
 if (currentPage < pageNumber.length) {
  setCurrentpage((state)=> state + 1 )
 }else{
  
 }
}
let prev =() =>{
  if (currentPage > 1) {
    setCurrentpage((state)=> state - 1 )
  }
}
let [showIcon, setshowIcon] = useState(false)

let [show, setshow] = useState(false)
let catone = useRef()
useEffect(()=>{
  document.addEventListener("click",(e)=>{
if(catone?.current?.contains(e.target) == true){
  setshow(!show)
  setshowIcon(!showIcon)
}else{
  setshow(false)
}

}) 
},[show])

let [twoshow, settwoshow] = useState(false)
let cattwo = useRef()
useEffect(()=>{
  document.addEventListener("click",(e)=>{
if(cattwo?.current?.contains(e.target) == true){
  settwoshow(!twoshow)
  setshowIcon(!showIcon)
}else{
  settwoshow(false)
}

}) 
},[twoshow])

let [threeshow, setthreeshow] = useState(false)
let catthree = useRef()
useEffect(()=>{
  document.addEventListener("click",(e)=>{
if(catthree?.current?.contains(e.target) == true){
  setthreeshow(!twoshow)
  setshowIcon(!showIcon)
}else{
  setthreeshow(false)
}

}) 
},[threeshow])

let [fourshow, setfourshow] = useState(false)
let catfour = useRef()
useEffect(()=>{
  document.addEventListener("click",(e)=>{
if(catfour?.current?.contains(e.target) == true){
  setfourshow(!twoshow)
  setshowIcon(!showIcon)
}else{
  setfourshow(false)
}

}) 
},[fourshow])
  return (
    <>
      <Container>
  <span className=' font-dm text-[12px] font-normal leading-[15.62px] pb-[50px]'> <Link to="/">Home</Link> / Products</span>
<Flex className=' pt-[100px]'>
  <div className='w-[25%]'>
    <h2 className='font-dm text-[20px] font-bold leading-[26.04px]'>Shop by Category</h2>

    <div className=' w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>
       <div ref={catone} className='flex justify-between pr-[15px] items-center pt-[10px]'>
       <h5 className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] cursor-pointer duration-300'>Category 1</h5>
   {showIcon ? <FaMinus className='h-[15px] w-[15px] text-[#767676]'/>  : <FaPlus className='h-[15px] w-[15px] text-[#767676]'/>}
       </div>
       { show &&
       <ul className='py-4'>
       <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Chetagory 2</li>
       <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Chetagory 3</li>
       <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Chetagory 4</li>
       <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] right-[15px]'>Chetagory 5</li>
      
      </ul>
       }
       
       
    </div>


<div className='mt-[210px]'>
<div className=' w-full h-[51px] top-[61px] left-[0.5px] right-[15px]'>
   <div ref={cattwo} className='flex justify-between pr-[15px] items-center pt-[10px] cursor-pointer'>
   <h2 className='font-dm text-[20px] font-bold leading-[26.04px] text-[#262626] '>Shop by Color</h2>
{ showIcon ? <IoCaretUpSharp className='h-[15px] w-[15px] text-[#767676]'/>  : <IoCaretDown className='h-[15px] w-[15px] text-[#767676]'/>}
   </div>
   { twoshow &&
   <ul className='py-4'>
    <div className=''>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px] flex'>
    <button className='w-[10px] h-[10px] rounded-full bg-black mt-[10px]'></button>
    <p className='px-3'>Color 1</p>
     </li>
     </div>
    <div className=''>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px] flex'>
    <button className='w-[10px] h-[10px] rounded-full bg-[#FF8686] mt-[10px]'></button>
    <p className='px-3'>Color 2</p>
     </li>
     </div>
    <div className=''>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px] flex'>
    <button className='w-[10px] h-[10px] rounded-full bg-[#7ED321] mt-[10px]'></button>
    <p className='px-3'>Color 3</p>
     </li>
     </div>
    <div className=''>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px] flex'>
    <button className='w-[10px] h-[10px] rounded-full bg-[#B6B6B6] mt-[10px]'></button>
    <p className='px-3'>Color 4</p>
     </li>
     </div>
    <div className=''>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] right-[15px] flex'>
    <button className='w-[10px] h-[10px] rounded-full bg-[#15CBA5] mt-[10px]'></button>
    <p className='px-3'>Color 5</p>
     </li>
     </div>
  
  
  </ul>
   }
</div>
   
   
</div>


<div className='mt-[240px]'>
<div className=' w-full h-[51px] top-[61px] left-[0.5px] right-[15px]'>
   <div ref={catthree} className='flex justify-between pr-[15px] items-center pt-[10px] cursor-pointer'>
   <h2 className='font-dm text-[20px] font-bold leading-[26.04px] text-[#262626] '>Shop by Brand</h2>
{ showIcon ? <IoCaretUpSharp className='h-[15px] w-[15px] text-[#767676]'/>  : <IoCaretDown className='h-[15px] w-[15px] text-[#767676]'/>}
   </div>
   { threeshow &&
   <ul className='py-4'>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Brand 1</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Brand 1</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Brand 3</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>Brand 4</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] right-[15px]'>Brand 5</li>

  
  </ul>
   }
</div>
   
   
</div>


<div className='mt-[240px]'>
<div className=' w-full h-[51px] top-[61px] left-[0.5px] right-[15px]'>
   <div ref={catfour} className='flex justify-between pr-[15px] items-center pt-[10px] cursor-pointer'>
   <h2 className='font-dm text-[20px] font-bold leading-[26.04px] text-[#262626] '>Shop by Price</h2>
{ showIcon ? <IoCaretUpSharp className='h-[15px] w-[15px] text-[#767676]'/>  : <IoCaretDown className='h-[15px] w-[15px] text-[#767676]'/>}
   </div>
   { fourshow &&
   <ul className='py-4'>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>$0.00 - $9.99</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>$10.00 - $19.99</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>$20.00 - $29.99</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>$30.00 - $39.99</li>
   <li className='font-dm font-normal text-[16px] leading-[30px] text-[#767676] w-full h-[51px] top-[61px] left-[0.5px] border-b-2 border-[#F0F0F0] right-[15px]'>$40.00 - $69.99</li>

  
  </ul>
   }
</div>
   
   
</div>
  </div>

  <div className='w-[75%]'>
    <div className='flex flex-wrap justify-between'>
   <Post post={allpage}/>
    </div>        
    <PaginationNum pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage}/>
  </div>
  
</Flex>
      
      </Container>
    </>
  )
}

export default Products