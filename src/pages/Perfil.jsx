import { useEffect, useState } from "react";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { useNavigate } from "react-router-dom";

function Perfil() {
   const [perfil, setPerfil] = useState([]);
   const userID = JSON.parse(localStorage.getItem("userID"))
   const navigate = useNavigate()

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      const obtenerEventos = async () => {
         await fetch(
            `http://localhost:3000/app/profile/${userID}`
         )
            .then((res) => res.json())
            .then((res) => {
               if (res.messageError) return console.error(res.messageError);
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
         <main className="flex flex-col items-center px-10 gap-8">
            <section className="grid grid-cols-11 w-full">
               <article className="col-span-5 flex justify-center">
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
               <article className="col-span-2 flex flex-col justify-evenly items-start">
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Usuario:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Nombre:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Apellido:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Telefono:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Email:
                  </h3>
               </article>
               <article className="col-span-2 flex flex-col justify-evenly items-start">
                  <p className="p-1">{perfil.username}</p>
                  <p className="p-1">{perfil.nombre}</p>
                  <p className="p-1">{perfil.apellido}</p>
                  <p className="p-1">{perfil.telefono}</p>
                  <p className="p-1">{perfil.email}</p>
               </article>
            </section>
            <button className="text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg">
               Editar
            </button>
         </main>
      </>
   );
}

export default Perfil;
