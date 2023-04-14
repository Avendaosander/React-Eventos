import { NavLink, useNavigate } from 'react-router-dom'
import LogoUVM from '../assets/LogoUVM.jpg'
import { BsPower } from 'react-icons/bs'
import { useState } from 'react'
const iconProfile = 'https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680901245/Eventos%20UVM/1680901247543-usuario.png'
function Navbar() {
   const [show, setShow] = useState(false)
   const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('imgPerfil')))
   const navegar = useNavigate()
   const rol = JSON.parse(localStorage.getItem('rol'))

   const toggleOptions = () => {
      setShow(!show)
   }
   const toPerfil = () => {
      setShow(false)
      navegar('/dashboard/profile')
   }
   const logout = () => {
      localStorage.clear()
      navegar('/login')
   }
   return (
      <nav
         id='navegacion'
         className='bg-teal-700'
      >
         <ul className='grid grid-cols-12 gap-x-3 py-3 items-center text-center'>
            <li className='col-start-1'>
               <NavLink to={'/dashboard'}>
                  <img
                     src={LogoUVM}
                     alt='Logo UVM'
                     className='h-12 rounded-full m-auto hover:scale-110'
                  />
               </NavLink>
            </li>
            <li className={rol !== 'Admin' ? 'col-start-9' : 'col-start-7'}>
               <NavLink
                  to={'/dashboard'}
                  className={({ isActive }) =>
                     isActive
                        ? 'font-bold text-lg text-white'
                        : 'font-bold text-lg text-slate-800'
                  }
               >
                  Home
               </NavLink>
            </li>
            <li className={rol !== 'Admin' ? 'col-start-10' : 'col-start-8'}>
               <NavLink
                  to={'/dashboard/events'}
                  className={({ isActive }) =>
                     isActive
                        ? 'font-bold text-lg text-white'
                        : 'font-bold text-lg text-slate-800'
                  }
               >
                  Eventos
               </NavLink>
            </li>
            {rol === 'Admin' ? (
               <>
                  <li className='col-start-9'>
                     <NavLink
                        to={'/dashboard/my-events'}
                        className={({ isActive }) =>
                           isActive
                              ? 'font-bold text-lg text-white'
                              : 'font-bold text-lg text-slate-800'
                        }
                     >
                        Mis Eventos
                     </NavLink>
                  </li>
                  <li className='col-start-10'>
                     <NavLink
                        to={'/register-admin'}
                        className={({ isActive }) =>
                           isActive
                              ? 'font-bold text-lg text-white'
                              : 'font-bold text-lg text-slate-800'
                        }
                     >
                        Crear Admin
                     </NavLink>
                  </li>
               </>
            ) : (
               <></>
            )}
            <li className='col-start-11'>
               <NavLink
                  to={'/dashboard/favoritos'}
                  className={({ isActive }) =>
                     isActive
                        ? 'font-bold text-lg text-white'
                        : 'font-bold text-lg text-slate-800'
                  }
               >
                  Favoritos
               </NavLink>
            </li>
            <li className='col-start-12 relative'>
               <NavLink
                  className='flex justify-center hover:scale-110'
                  onClick={toggleOptions}
               >
                  <img
                     src={avatar ? avatar : iconProfile}
                     alt='Imagen de Perfil'
                     className='w-9 rounded-full'
                  />
               </NavLink>
               <div
                  className={
                     show
                        ? 'bg-teal-700/90 absolute w-full -bottom-24 flex flex-col rounded-b-xl'
                        : ' hidden'
                  }
               >
                  <button
                     onClick={toPerfil}
                     className='flex gap-2 p-2 items-center justify-center hover:bg-teal-400 rounded-lg'
                  >
                     <img
                        src={avatar ? avatar : iconProfile}
                        alt='Imagen de Perfil'
                        className='w-6 rounded-full'
                     />
                     Perfil
                  </button>
                  <button
                     onClick={logout}
                     className='flex gap-2 p-2 items-center justify-center hover:bg-teal-400 rounded-lg'
                  >
                     <BsPower className='font-black text-2xl text-slate-800 hover:text-white' />
                     Salir
                  </button>
               </div>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
