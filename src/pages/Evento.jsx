import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { useParams } from "react-router-dom";

function Evento() {
   const [event, setEvent] = useState([]);
   const [participantes, setParticipantes] = useState([]);
   const [keywords, setKeywords] = useState([]);
   const param = useParams();
   useEffect(() => {
      const obtenerEventos = async() => {
         await fetch(`http://localhost:3000/events/event/${param.eventID}`)
            .then(res => res.json())
            .then(res => {
               setEvent(res.evento)
               setParticipantes(res.evento.participantes.length)
               setKeywords(res.evento.keywords)
            })
      }
      obtenerEventos()
   }, [])
   // console.log(event);
   // console.log(participantes);
   // console.log(keywords);
   return (
      <>
         <Navbar />
         <main>
            <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
               {event.titulo}
            </h2>
            <section className="grid grid-cols-10 grid-rows-6 gap-x-8 gap-y-3 px-10 items-center">
               <img
                  src={!event.imagen ? bgSlider : event.imagen.secure_url}
                  alt="Imagen del Evento"
                  className="col-span-5 row-span-6 rounded-2xl h-full w-4/5 m-auto"
               />
               <article className="col-span-3 row-span-5">
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Organizador:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Participantes:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Fecha:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Hora:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Duracion:
                  </h3>
                  <h3 className="text-lg font-bold text-slate-800 p-1">
                     Lugar del Evento:
                  </h3>
               </article>
               <article className="col-span-2 row-span-5">
                  <p className="text-lg p-1">{event.organizador}</p>
                  <p className="text-lg p-1">{participantes}</p>
                  <p className="text-lg p-1">{event.fecha}</p>
                  <p className="text-lg p-1">{event.hora}</p>
                  <p className="text-lg p-1">{event.duracion ? event.duracion : 'No definido'}</p>
                  <p className="text-lg p-1">{event.lugar}</p>
               </article>
               <div className="row-span-1 col-span-5 flex justify-center">
                  <button className="text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg">
                     Añadir a Favoritos
                  </button>
               </div>
            </section>
            <section className="text-center px-10 grid grid-cols-3 my-10">
               <article className="col-span-2">
                  <h3 className="text-center text-xl font-bold text-slate-800 p-1">
                     Descripcion
                  </h3>
                  <p>
                     {event.descripcion}
                  </p>
               </article>
               <article>
                  <h3 className="text-center text-xl font-bold text-slate-800 p-1">
                     Palabras Claves:
                  </h3>
                  {keywords.map((index ,key) => (
                     <p key={key}>{index}</p>
                  ))}
               </article>
            </section>
         </main>
      </>
   );
}

export default Evento;
