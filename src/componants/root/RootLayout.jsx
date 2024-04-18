import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Navber from '../Navber'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <>
   <Header/>
   <Navber/>   
    <Outlet/>
    <Footer/>

    </>
  )
}

export default RootLayout