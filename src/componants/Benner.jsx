import React from 'react'
import Banone from '../aseets/benner.png'
import Bantwo from '../aseets/benner2.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Two from '../aseets/2.png'
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import Addone from "../aseets/addone.png"
import Addtwo from "../aseets/addtwo.png"
import Addthree from "../aseets/addthree.png"


const Benner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    appendDots: dots => (
      <div
        style={{
        
          borderRadius: "10px",
          padding: "20px",
          position: 'absolute',
          top:"50%",
          left:"50px",
          transform:"translateY(-50%)",
          transition:"500",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          fontFamily:"DM Sans",
          color:'#262626',
          padding: "10px 0px",
          width: "30px",
          borderRight: "4px #fff solid"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    < div className=''>
      <Slider {...settings} className='inline-block'>
      <img src={Banone} alt=""  className='h-[220px] lg:h-full'/>
            <img src={Bantwo} alt=""  className=' w-full lg:h-[590px] h-[220px]'/>
            <img src={Banone} alt=""  className='h-[220px] lg:h-full'/>

      </Slider>



      <div className='w-full h-[80px] bg-[#FFF] flex justify-around border-b-4 lg:mb-[174px] !mb-[50px] '>
               <div className='lg:w-[33.3%] h-full flex lg:pl-[200px] pt-[30px]'>
                <img src={Two} alt="" className='w-[13.5px] h-[19.5px]'/>
                 <p className=' font-dm font-normal text-[16px] items-center pl-[10px]'>Two years warranty</p>
               </div>

               <div className='lg:w-[33.3%] h-full flex lg:pl-[150px] pt-[30px]'>
               <MdLocalShipping className='w-[25px] h-[25px]'/>
                 <p className=' font-dm font-normal text-[16px] items-center pl-[10px]'>Free shipping</p>
               </div>

               <div className='lg:w-[33.3%] h-full flex lg:pl-[150px] pt-[30px]'>
               <GiReturnArrow className='w-[25px] h-[25px]'/>
                 <p className=' font-dm font-normal text-[16px] items-center pl-[10px]'>Return policy in 30</p>
               </div>
                
      </div>

      <div className='lg:w-[1604px] mx-auto flex lg:mb-[128px] !mb-[50px]'>
        <div className='w-[50%]'>
       <img src={Addone} alt="" />
        </div>
        <div className='w-[50%] justify-center'>
       <img src={Addtwo} alt="" className='mb-[40px]' />
       <img src={Addthree} alt="" />
        </div>

      </div>
    </div>

  
  )
}

export default Benner