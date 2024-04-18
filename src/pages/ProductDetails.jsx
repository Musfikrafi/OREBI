import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { addTocart } from '../componants/slice/singleSlice'

const ProductDetails = () => {
   let dispatch = useDispatch()
    let [data,sateData] = useState([])
let productId = useParams()
 let dataId = () =>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) =>{
        sateData(response.data);
    })     
 }
    useEffect(() => {
        dataId()
    },[])

    let handleProduct = (item) =>{
      dispatch(addTocart({...item, qun: 1}))
    }
   

    let clientRating = Array.from({length:5},(elm,index)=>{
    let number = index + 0.5;
    return(
      data.rating >= index +1 ? <IoIosStar/> : data.rating >= number ?  <IoIosStarHalf/> : <IoIosStarOutline/>
    )
    })
    
  return (
    <>
    <Container>
  <Flex classname=" justify-between">
 
 {data?.images?.map((item)=>(
    <div className='w-[32%] h-[350px] py-[20px] px-[20px]'>
 <img src={item} alt="" className='w-full h-full' />
    </div> 
    ))}
 
  </Flex>

  <div>
    <h2 className=' font-dm font-bold text-[39px]'>Product</h2>
    <div className=' flex'>
      {clientRating}
      
    </div>
    <span className=''>Review</span>
  
 <h4 className='font-dm font-bold text-[16px] px-3 py-10'>${data.price}</h4>

 <div>
  <ul className='py-10'>
    <li className=' mr-[20px] font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] inline-block'>Add to Wish List</li>
   <Link to="/cart">
   <li onClick={()=>handleProduct(data)}  className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] inline-block'>Add to Cart</li>
   </Link>
  </ul>
 </div>

 </div>
    </Container>
    </>
  )
}

export default ProductDetails