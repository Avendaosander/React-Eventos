import { NavLink } from 'react-router-dom'
import LogoUVM from '../assets/LogoUVM.jpg'

function NavAuth() {
   return (
      <>
         <li className='col-start-1'>
            <NavLink to={'/'}>
               <img
                  src={LogoUVM}
                  alt='Logo UVM'
                  className='h-12 rounded-full m-auto hover:scale-110'
               />
            </NavLink>
         </li>
         <li className='col-start-10'>
            <NavLink
               to={'login'}
               className={({ isActive }) =>
                  isActive
                     ? 'font-bold text-lg text-white'
                     : 'font-bold text-lg text-slate-800'
               }
            >
               Login
            </NavLink>
         </li>
         <li className='col-start-11'>
            <NavLink
               to={'register'}
               className={({ isActive }) =>
                  isActive
                     ? 'font-bold text-lg text-white'
                     : 'font-bold text-lg text-slate-800'
               }
            >
               Register
            </NavLink>
         </li>
      </>
   )
}

export default NavAuth