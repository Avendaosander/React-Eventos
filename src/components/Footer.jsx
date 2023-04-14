import LogoUVM from '../assets/LogoUVM.jpg'
import LogoUVM2 from '../assets/LOGO-RIF-1.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
   return (
      <footer
         id='footer'
         className='bg-slate-800 w-full pt-4 flex flex-col items-center text-white'
      >
         <div className='grid grid-cols-3 gap-3 w-full justify-evenly p-4'>
            <div className='flex flex-col gap-3 justify-center items-center text-center'>
               <img
                  src={LogoUVM}
                  alt='Logo UVM'
                  className='w-20 rounded-full'
               />
               <p className='text-gray-200'>
                  Aplicación de Eventos
               </p>
            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
               <p className=' text-lg font-bold'>Desarrollador</p>
               <a
                  href='https://github.com/Avendaosander'
                  target={'_blank'}
                  className='text-gray-200 text-sm hover:scale-110'
               >
                  Alexander Avendaño
               </a>
            </div>
            <div className='flex flex-col gap-2 text-center'>
               <p className=' text-lg font-bold'>Siguenos en:</p>
               <div className='flex gap-5 justify-center items-center text-center'>
                  <a href='https://www.facebook.com/univalledelmomboy/' target={'_blank'}>
                     <FaFacebookF className='text-4xl hover:scale-125' />
                  </a>
                  <a href='https://twitter.com/univallemomboy?lang=es' target={'_blank'}>
                     <FaTwitter className='text-4xl hover:scale-125' />
                  </a>
                  <a href='https://www.instagram.com/univalledelmomboy/?hl=es' target={'_blank'}>
                     <FaInstagram className='text-4xl hover:scale-125' />
                  </a>
                  <a href='https://uvm.edu.ve/' target={'_blank'}>
                     <img
                        src={LogoUVM2}
                        alt='Logo UVM'
                        className='w-10 rounded-full hover:scale-125'
                     />
                  </a>
               </div>
            </div>
         </div>
         <p className='text-center w-full py-4'>
            Copyrigth ©️ 2023 AppEventos | Todos los derechos reservados
         </p>
      </footer>
   )
}

export default Footer
