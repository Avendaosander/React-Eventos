import { useEffect, useState } from "react";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt"

function Perfil() {
   const [perfil, setPerfil] = useState([]);
   const [listFavorites, setListFavorites] = useState([])
   const [confirmEvents, setConfirmEvents] = useState([])
   const decodedID = decodeToken(JSON.parse(localStorage.getItem("token")))
   const userID = decodedID.id
   const rol = JSON.parse(localStorage.getItem("rol"))
   const navigate = useNavigate()
   const token = JSON.parse(localStorage.getItem("token"));

   const redirectTo = () => {
      navigate('/dashboard/update-profile')
   }

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      const obtenerEventos = async () => {
         await fetch(
            `http://localhost:3000/app/profile/${userID}`,{
               headers: { Authorization: `Bearer ${token}` }
            }
         )
            .then((res) => res.json())
            .then((res) => {
               if (res.messageError) return console.error(res.messageError);
               const avatar = res.user.imgPerfil ? res.user.imgPerfil.secure_url : res.user.imgPerfil
               localStorage.setItem('imgPerfil', JSON.stringify(avatar))
               setListFavorites(res.user.favorites.length)
               setConfirmEvents(res.user.confirmEvent.length)
               setPerfil(res.user);
            });
      };
      obtenerEventos();
   }, []);
   // console.log(events);
   return (
      <>
         <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
            Perfil
         </h2>
         <main className="flex flex-col items-center px-10">
            <section className="grid grid-cols-10 grid-rows-3 w-full">
               <article className="row-span-2 col-span-5 flex justify-center">
                  <img
                     src={
                        !perfil.imgPerfil
                           ? bgSlider
                           : perfil.imgPerfil.secure_url
                     }
                     alt="Imagen de Perfil"
                     className="rounded-full h-72 w-72 bg-cover"
                  />
               </article>
               <article className="row-span-2 col-span-2 flex flex-col justify-evenly items-start">
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Usuario:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Nombre:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Apellido:
                  </h3>
                  {rol === 'Admin' && (
                     <h3 className="text-lg font-bold text-slate-800 p-1">
                        Biografia:
                     </h3>
                  )}
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Edad:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Telefono:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Email:
                  </h3>
               </article>
               <article className="row-span-2 col-span-3 flex flex-col justify-evenly items-start">
                  <p className="p-1">{perfil.username}</p>
                  <p className="p-1">{perfil.nombre}</p>
                  <p className="p-1">{perfil.apellido}</p>
                  {rol === 'Admin' && (
                     <p className="p-1 text-start">{perfil.biografia}</p>
                  )}
                  <p className="p-1">{perfil.edad}</p>
                  <p className="p-1">{perfil.telefono}</p>
                  <p className="p-1">{perfil.email}</p>
               </article>
               <article className="row-start-3 col-span-5 flex justify-end items-center mr-10">
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Eventos Favoritos:
                  </h3>
                  <p className="bg-teal-500 py-2 px-4 rounded-2xl font-bold ml-3">{listFavorites}</p>
               </article>
               <article className="row-start-3 col-span-5 flex justify-start items-center ml-10">
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Asistencia Confirmada:
                  </h3>
                  <p className="bg-teal-500 py-2 px-4 rounded-2xl font-bold ml-3">{confirmEvents}</p>
               </article>
            </section>
            <button onClick={redirectTo} className="text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg">
               Editar
            </button>
         </main>
      </>
   );
}

export default Perfil;
