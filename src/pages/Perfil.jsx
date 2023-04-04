import React, { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";

function Perfil() {
   const [perfil, setPerfil] = useState([]);
   const [events, setEvents] = useState([]);

   useEffect(() => {
      const obtenerEventos = async () => {
         await fetch(
            "http://localhost:3000/app/favorites/642b30d8e1a43e1ef48b5c92"
         )
            .then((res) => res.json())
            .then((res) => {
               setPerfil(res.eventos);
               setEvents(res.eventos.favorites);
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
                  <p className="p-1">Avendaosander</p>
                  <p className="p-1">{perfil.nombre}</p>
                  <p className="p-1">{perfil.apellido}</p>
                  <p className="p-1">{perfil.telefono}</p>
                  <p className="p-1">{perfil.email}</p>
               </article>
            </section>
            <button className="text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg">
               Editar
            </button>
            <section>
               <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
                  Mis Eventos Favoritos
               </h2>
               <section className="grid grid-cols-3 gap-10 px-20 py-5">
                  {!events
                     ? null
                     : events.map((evento) => (
                          <article
                             className="relative rounded-xl bg-teal-700 flex flex-col hover:scale-105"
                             key={evento._id}
                          >
                             <CardEvent event={evento} />
                          </article>
                       ))}
               </section>
            </section>
         </main>
      </>
   );
}

export default Perfil;
