import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'

let Apidata =  createContext()

const ContexApi = ({children}) => {
let [ info , setInfo ] = useState([])

useEffect(()=>{
    let getdata = ()=>{
     axios.get('https://dummyjson.com/products').then((respone)=>{
         setInfo(respone.data.products);
     })
    }
    getdata()

 },[])


  return (

    <>
      <Apidata.Provider value={info}>{children}</Apidata.Provider>
    </>
  )
}

export {ContexApi,Apidata}