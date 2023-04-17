import React from "react";
import { useState, useEffect } from "react";
import CardEvent from "../components/CardEvent";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt"

function MyEvents() {
   const [events, setEvents] = useState([]);
   const [favoritos, setFavoritos] = useState([])
   const decodedID = decodeToken(JSON.parse(localStorage.getItem("token")))
   const adminID = decodedID.id
   const navigate = useNavigate()
   const token = JSON.parse(localStorage.getItem("token"));

   const redirectTo = () => {
      navigate('/new-event')
   }

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      const favoritos = JSON.parse(localStorage.getItem("favorites"))
      setFavoritos(favoritos)
      const obtenerEventos = async() => {
         await fetch(`http://localhost:3000/app/my-events/${adminID}`,{
            headers: { Authorization: `Bearer ${token}` }
         })
            .then(res => res.json())
            .then(res => { 
               if (res.messageError) return console.error(res.messageError);
               setEvents(res.misEventos)
            })
      }
      obtenerEventos()
   }, [])
   // console.log(events);

   if (events.length === 0)
      return (
         <h2 className="text-center text-xl font-bold text-slate-800 p-4">
            No has creado ningun Evento hasta los momentos
         </h2>
      );

   return (
      <>
         <h2 className="text-center text-2xl font-bold text-slate-800 pt-4">
            Mis Eventos
         </h2>
         <button onClick={redirectTo} className="text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg fixed right-5 bottom-14 z-10 hover:scale-110">
            Crear Evento
         </button>
         <section className="grid grid-cols-3 gap-10 px-20 py-5">
            {!events ? null : events.map((evento) => (
               <article
                  className="relative rounded-xl bg-teal-700 flex flex-col hover:scale-105"
                  key={evento._id}
               >
                  <CardEvent event={evento} favorite={favoritos.includes(evento._id) ? true : false}/>
               </article>
            ))}
         </section>
      </>
   );
}

export default MyEvents;
