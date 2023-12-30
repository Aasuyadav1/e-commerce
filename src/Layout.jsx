import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Discount from './components/Discount'
import Footer from './components/Footer'
import Scrolltop from './components/Scrolltop'

function Layout() {
  return (
    <>
        <Scrolltop/>
        <div className='sticky z-10 top-0 w-full'>
        
         <Navbar/>
        </div>
        <Outlet/>
        <Footer/>
    </>
  
  )
}

export default Layout