import React, { useEffect, useState } from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa6";
import { LuGitCompare } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Arrive1 from'../aseets/arrive p-2.1.png'
import Arrive2 from'../aseets/arrive p-2.2.png'
import Arrive3 from'../aseets/arrive p-2.3.png'
import Arrive4 from'../aseets/arrive p-2.4.png'
import Phoneadd from "../aseets/Phoneadd.png"


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='next'
        onClick={onClick}
      ><FaArrowRight className=' inline-block text-center lg:h-[20px]  lg:w-[20px] lg:pt-0  text-[#FFFFFF]'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
      className='prev'
        onClick={onClick}
      >  <FaArrowLeft className=' inline-block text-center lg:h-[20px] lg:w-[20px] text-[#FFFFFF]'/></div>
    );
  }

const Newarrivals = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
         
        ]
      };
  
    let [info, setInfo] = useState([])
          
            useEffect(()=>{
               let getdata = ()=>{
                axios.get('https://dummyjson.com/products').then((respone)=>{
                    setInfo(respone.data.products);
                })
               }
               getdata()
            },[])
     
  return (
    <div>
        <Container>
            <div>
                <h2 className='font-dm pb-[48px] font-blod text-[39px]'>New Arrivals</h2>
            </div>
            <Slider {...settings}>
            
  {info.map((item)=>(
     <div className='!w-[95%] lg:h-[full] h-[100px]'>
     <div className='relative group'>
      <img src={item.thumbnail} alt=""  className='lg:h-[300px] h-[150px] w-[300px] lg:w-full'/>

      <div className=' absolute top-[20px] left-[20px] h-[32px] w-[92px] bg-[#262626]'>
                     <p className=' font-dm font-bold text-[14px] leading-[18.23px] text-[#FFFF] text-center items-center pt-[7px]'>{item.discountPercentage}</p>
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
    <div className='flex justify-between py-4'>
       <h5 className='font-dm font-bold text-[20px]'>{item.title}</h5>
       <p className='font-dm font-medium text-[16px] text-[#767676]'>{item.price}</p>
    </div>

</div>
                ))}
            </Slider>


            <div className='lg:mt-[217px] mt-[100px] w-full lg:mb-[130px] mb-[50px] lg:flex f justify-between'>

                 <div className='h-[465px] lg:w-[25%] lg:justify-center lg:items-center'>
                <div className=' relative group'>
                <img src={Arrive1} alt=""/>

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
                              

                  <div className=' flex justify-between pt-[40px] pb-[15px]'>
                    <h3 className='font-dm font-bold text-[20px]'>Basic Crew Neck Tee</h3>
                    <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px]'>$44.00</p>
                  </div>
                  <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px] opacity-[0.5]'>Black</p>
                 </div>

                 <div className='h-[465px] lg:w-[25%] justify-center items-center'>
                <div className=' relative group'>
                <img src={Arrive2} alt=""/>

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
                              

                  <div className=' flex justify-between pt-[40px] pb-[15px]'>
                    <h3 className='font-dm font-bold text-[20px]'>Basic Crew Neck Tee</h3>
                    <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px]'>$44.00</p>
                  </div>
                  <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px] opacity-[0.5]'>Black</p>
                 </div>


                 <div className='h-[465px] lg:w-[25%] justify-center items-center'>
                <div className=' relative group'>
                <img src={Arrive3} alt=""/>

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
                              

                  <div className=' flex justify-between pt-[40px] pb-[15px]'>
                    <h3 className='font-dm font-bold text-[20px]'>Basic Crew Neck Tee</h3>
                    <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px]'>$44.00</p>
                  </div>
                  <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px] opacity-[0.5]'>Black</p>
                 </div>

                 <div className='h-[465px] lg:w-[25%]   justify-center items-center'>
                <div className=' relative group'>
                <img src={Arrive4} alt=""/>

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
                              

                  <div className=' flex justify-between pt-[40px] pb-[15px]'>
                    <h3 className='font-dm font-bold text-[20px]'>Basic Crew Neck Tee</h3>
                    <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px]'>$44.00</p>
                  </div>
                  <p className='font-dm font-medium text-[16px] text-[#767676] pr-[20px] opacity-[0.5]'>Black</p>
                 </div>

            </div>

            <div className='lg:mb-[128px] mb-[70px]'>
  <img src={Phoneadd} alt="" className=' lg:h-full h-[150px] w-full'/>
</div>
        </Container>
    </div>
  )
}

export default Newarrivals