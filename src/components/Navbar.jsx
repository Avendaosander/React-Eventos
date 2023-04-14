import { useLocation } from 'react-router-dom'
import NavApp from './NavApp'
import NavAuth from './NavAuth'

function Navbar() {
   const { pathname } = useLocation()
   return (
      <nav
         id='navegacion'
         className='bg-teal-700'
      >
         <ul className='grid grid-cols-12 gap-x-3 py-3 items-center text-center'>
            {pathname === '/' ||
            pathname === '/login' ||
            pathname === '/register' ? (
               <NavAuth />
            ) : (
               <NavApp />
            )}
         </ul>
      </nav>
   )
}

export default Navbar
