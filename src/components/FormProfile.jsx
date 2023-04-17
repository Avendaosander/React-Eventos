import { useState } from 'react'
import { VscAdd } from 'react-icons/vsc'
import bgSlider from '../assets/FONDO-HOME-SLIDER4.jpg'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'

function FormProfile() {
   const [preview, setPreview] = useState('')
   const [imgPerfil, setImgPerfil] = useState(null)
   const [nombre, setNombre] = useState('')
   const [apellido, setApellido] = useState('')
   const [biografia, setBiografia] = useState('')
   const [edad, setEdad] = useState('')
   const [telefono, setTelefono] = useState('')
   const navegar = useNavigate()
   const rol = JSON.parse(localStorage.getItem('rol'))
   const decodedID = decodeToken(JSON.parse(localStorage.getItem('token')))
   const userID = decodedID.id
   const imgProfile = JSON.parse(localStorage.getItem('imgPerfil'))
   const avatar = imgProfile ? imgProfile : bgSlider
   const token = JSON.parse(localStorage.getItem("token"));

   const handleFile = e => {
      console.log(e.target.files[0]);
      let selectFile = e.target.files[0]
      if (!selectFile) return
      setImgPerfil(selectFile)
      setPreview(URL.createObjectURL(selectFile))
   }

   const handleSubmit = e => {
      e.preventDefault()
      // console.log(email, password);
      const body = new FormData()
      nombre !== '' && (body.append('nombre', nombre))
      apellido !== '' && (body.append('apellido', apellido))
      rol === 'Admin' && biografia && (body.append('biografia', biografia))
      imgPerfil !== null && (body.append('imgPerfil', imgPerfil))
      edad !== '' && (body.append('edad', edad))
      telefono !== '' && (body.append('telefono', telefono))

      const updateProfile = async () => {
         console.log(body.append);
         await fetch(`http://localhost:3000/app/update-profile/${userID}`, {
            headers: { Authorization: `Bearer ${token}` },
            method: 'POST',
            body
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) return console.error(res.messageError)
               // console.log(res.token);
               navegar(`/dashboard/profile`)
            })
      }
      updateProfile()
   }

   return (
      <form
         className='flex justify-around flex-col gap-3 p-10 bg-slate-800 w-3/6 h-4/5 mt-10 mx-auto rounded-3xl'
         onSubmit={handleSubmit}
      >
         <h1 className='text-white text-xl font-bold'>Perfil</h1>
         <section className='m-auto relative mt-2'>
            <label
               htmlFor='imagen'
               className='cursor-pointer flex justify-center items-center bg-teal-600 rounded-full w-10 h-10 absolute right-5 top-56'
            >
               <VscAdd className='text-slate-800 relative text-xl m-1' />
            </label>
            <input
               type='file'
               id='imagen'
               name='imagen'
               className='hidden'
               onChange={handleFile}
            />
            <img
               src={preview === '' ? avatar : preview}
               alt='Imagen del Evento'
               className='w-72 h-72 object-cover ring-2 ring-slate-500/30 m-auto rounded-full'
            />
         </section>
         <label
            htmlFor='nombre'
            className='text-white text-start'
         >
            Nombre
         </label>
         <input
            className='rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600'
            type='text'
            id='nombre'
            placeholder='nombre'
            onChange={e => setNombre(e.target.value)}
            value={nombre}
            autoFocus
         />
         <label
            htmlFor='apellido'
            className='text-white text-start'
         >
            Apellido
         </label>
         <input
            className='rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600'
            type='text'
            id='apellido'
            placeholder='Apellido'
            onChange={e => setApellido(e.target.value)}
            value={apellido}
         />
         {rol === 'Admin' && (
            <>
               <label
                  htmlFor='biografia'
                  className='text-white text-start'
               >
                  Biografia
               </label>
               <input
                  className='rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600'
                  type='number'
                  id='biografia'
                  min={13}
                  max={80}
                  placeholder='Biografia'
                  onChange={e => setBiografia(e.target.value)}
                  value={biografia}
               />
            </>
         )}
         <label
            htmlFor='edad'
            className='text-white text-start'
         >
            Edad
         </label>
         <input
            className='rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600'
            type='number'
            id='edad'
            placeholder='Edad'
            onChange={e => setEdad(e.target.value)}
            value={edad}
         />
         <label
            htmlFor='telefono'
            className='text-white text-start'
         >
            Telefono
         </label>
         <input
            className='rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600'
            type='tel'
            id='telefono'
            placeholder='Telefono'
            onChange={e => setTelefono(e.target.value)}
            value={telefono}
         />
         <button
            type='submit'
            className='bg-green-600 py-2 rounded-xl w-3/6 text-center text-slate-900 font-semibold mx-auto'
         >
            Guardar Cambios
         </button>
      </form>
   )
}

export default FormProfile
