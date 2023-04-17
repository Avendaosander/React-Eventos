import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { decodeToken } from "react-jwt"

function Evento() {
   const [event, setEvent] = useState([]);
   const [participantes, setParticipantes] = useState([]);
   const [keywords, setKeywords] = useState([]);
   const param = useParams();
   const navigate = useNavigate()
   const [fav, setFav] = useState(false);
   const token = JSON.parse(localStorage.getItem("token"))
   const decodedID = decodeToken(JSON.parse(localStorage.getItem("token")))
   const userID = decodedID.id
   const listFav = JSON.parse(localStorage.getItem("favorites"));

   const buttonFav = fav ? 'text-white text-lg font-semibold bg-red-600 py-1 px-4 rounded-lg' : 'text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg'
   const buttonFavText = fav ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'

   const updateFavoritesLS = (fav, eventID) => {
      const favoritos = JSON.parse(localStorage.getItem("favorites"))
      if (fav) {
         favoritos.push(eventID)
         return localStorage.setItem("favorites", JSON.stringify(favoritos))
      }
      for (let i = 0; i < favoritos.length; i++) {
         if (favoritos[i] === eventID) favoritos.splice(i, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(favoritos))
   }

   const handleFavorite = () => {
      const validateFavorite = async () => {
         await fetch(`http://localhost:3000/app/toggle-favorite/${event._id}`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
               userID,
            }),
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) return console.error(res.messageError);
               updateFavoritesLS(res.fav, event._id)
               return setFav(res.fav);
            });
      };
      validateFavorite();
   };

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      const obtenerEvento = async() => {
         await fetch(`http://localhost:3000/events/event/${param.eventID}`,{
            headers: { Authorization: `Bearer ${token}` }
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) return console.error(res.messageError);
               setEvent(res.evento)
               setParticipantes(res.evento.participantes.length)
               setKeywords(res.evento.keywords)
               if (listFav.includes(res.evento._id)) setFav(true)
            })
      }
      obtenerEvento()
   }, [])
   
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
                  <button onClick={handleFavorite} className={buttonFav}>
                     {buttonFavText}
                  </button>
               </div>
            </section>
            <section className="text-center px-10 grid grid-cols-3 my-10">
               <article className="col-span-2">
                  <h3 className="text-center text-xl font-bold text-slate-800 p-1">
                     Descripcion
                  </h3>
                  <p>{event.descripcion}</p>
               </article>
               <article>
                  <h3 className="text-center text-xl font-bold text-slate-800 p-1">
                     Palabras Claves:
                  </h3>
                  {keywords.map((key) => (
                     <p key={key}>{key}</p>
                  ))}
               </article>
            </section>
         </main>
      </>
   );
}

export default Evento;
