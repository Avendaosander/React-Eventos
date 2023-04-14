import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Welcome() {
   const { pathname } = useLocation()
   return (
      <>
         <Navbar />
         {pathname === '/' ? (
            <h1 className='text-center text-2xl font-bold text-slate-800 pt-4'>
               Universidad Valle Del Momboy
            </h1>
         ) : (
            <Outlet />
         )}
      </>
   )
}

export default Welcome
