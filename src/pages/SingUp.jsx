import React, { useState } from 'react'
import Container from '../componants/Container'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";

const SingUp = () => {
  let [fullname,setFullname]= useState("");
  let [email,setEmail]= useState("");
  let [password,setPassword] = useState("");
  let [show,setShow] = useState(false);
  let [err,setErr] = useState("")
 
  let handleFristname =(e) =>{
    setFullname(e.target.value);
  }
  let handleEmial =(e) =>{
    setEmail(e.target.value);
    setErr("");
  }
  let handlePassword =(e) =>{
    setPassword(e.target.value);
  }
  let handleSubmit =(e) =>{
if(!email){
  setErr("ENTER YOUR MAIL PLEASE!!")
}else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
setErr("Enter your Vaild Email");
}
  }
  return (
   <>
   <Container>
   <div className=' my-8'>
    <h1 className='font-dm font-bold text-[49px] text-[#262626] leading-[63.8px]'>Sign up</h1>
    <span className=' font-dm text-[16px] font-normal leading-[15.62px] pb-[50px] px-4'> <Link to="/">Home</Link> / Sign up</span>
  </div>

  <div className='mb-[129px] mt-[129px] border-b-2 border-[#F0F0F0] pb-[59px]'>
  <h1 className='font-dm font-bold text-[39px]  text-[#262626] leading-[50px]'>Your Personal Details</h1>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%]  '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>First Name *</label> <br />
  <input type="text" placeholder='First Name' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' onChange={handleFristname}  />
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Last Name *</label> <br />
  <input type="text" placeholder='Last Name' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%] relative '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Email address</label> <br />
  <input type="text" placeholder='company@domain.com' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]'onChange={handleEmial}  />
  <div className=' absolute top-[100%] translate-y-[-100%] left-[50%] translate-x-[-50%]'>
  <p className='font-bold text-[#ff4848]'>{err}</p>
  </div>
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Telephone</label> <br />
  <input type="text" placeholder='Your phone number' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>



</div>


<div className='mb-[129px] border-b-2 border-[#F0F0F0] pb-[40px]'>
  <h1 className='font-dm font-bold text-[39px]  text-[#262626] leading-[50px]'>New Customer</h1>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%]  '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Address 1</label> <br />
  <input type="text" placeholder='4279 Zboncak Port Suite 6212' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]'  />
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Address 2</label> <br />
  <input type="text" placeholder='—' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%]  '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>City</label> <br />
  <input type="text" placeholder='Your city' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]'  />
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Post Code</label> <br />
  <input type="text" placeholder='05228' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>
 <div className='flex mb-[34px] mt-[42px]'>
 <div className='w-[45%] h-[68px] mr-[5%]  '>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Division</label> <br />
  <input type="text" placeholder='Please select' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]'  />
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>District</label> <br />
  <input type="text" placeholder='Please select' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>


</div>


<div className='mb-[129px] border-b-2 border-[#F0F0F0] pb-[40px]'>
  <h1 className='font-dm font-bold text-[39px]  text-[#262626] leading-[50px]'>Your Password</h1>
 <div className='flex mb-[34px] mt-[42px] '>
 <div className='w-[45%] h-[68px] mr-[5%] relative'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Password</label> <br />
  <input type={show ? "text" : "password"} placeholder='Password' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' onChange={handlePassword}  />
  <div onClick={()=>setShow(!show)} className=' absolute top-[70%] right-6 tralate-y-[-70%] cursor-pointer'>
    {show ? <FaEye className=' h-[20px] w-[20px]'/>: <FaEyeLowVision className=' h-[20px] w-[20px]'/>}
  </div>
</form>
 </div>
 <div className='w-[45%] h-[68px]'>
 <form action="" >
  <label htmlFor="name" className='font-dm font-bold text-[18px] text-[#262626] leading-[32px] pl-[10px]'>Repeat Password</label> <br />
  <input type="password" placeholder='Repeat Password' className=' border-b-2 border-[#F0F0F0] w-full h-[50px] bg-transparent font-dm font-normal text-[16px] text-[#262626] leading-[18.23px] pl-[10px]' />
</form>
 </div>
 </div>
</div>
<div className='mb-[40px]' onClick={handleSubmit}>
  <Link to="/login">
  <span className=' font-dm text-[16px] py-[16px] px-[50px] bg-[#262626] text-[#FFFFFF] border-2 border-[#262626] hover:bg-[white] hover:text-[#262626] hover:duration-[0.5s] cursor-pointer'>Sing Up</span>
  </Link>
  </div>
<div className='flex mb-[138px]'>
  <p className='font-dm text-[16px]  text-[#262626] font-normal'>Already have account? <span className='font-dm text-[17px]  text-[#727272] font-bold'> <Link to="/login">please Login</Link></span></p>
</div>
   </Container>
   </>
  )
}

export default SingUp