import { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt"

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function CardEvent({ event, favorite = false, handleFavPage = null }) {
   const [fav, setFav] = useState(favorite);
   const token = JSON.parse(localStorage.getItem("token"));
   const decodedID = decodeToken(JSON.parse(localStorage.getItem("token")))
   const userID = decodedID.id

   const fecha = new Date(event.fecha)
   const year = fecha.getFullYear()
   const month = meses[fecha.getMonth()]
   const dia = fecha.getDate() + 1
   const diaSemana = diasSemana[fecha.getDay()]

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
      const validateFavorite = async() => {
         await fetch(`http://localhost:3000/app/toggle-favorite/${event._id}`,{
            method: 'POST',
            headers: { 
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ 
               userID
            })
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) return console.error(res.messageError)
               updateFavoritesLS(res.fav, event._id)
               if (!handleFavPage) return setFav(res.fav)
               handleFavPage()
            })
      }
      validateFavorite()
   };

   return (
      <>
         <button className="absolute right-2 top-2" onClick={handleFavorite}>
            {fav ? (
               <BsStarFill className="text-yellow-400  text-2xl hover:scale-125" />
            ) : (
               <BsStar className="text-slate-800 text-2xl hover:scale-125" />
            )}
         </button>

         <img
            src={!event.imagen ? bgSlider : event.imagen.secure_url}
            alt="Evento"
            className="w-full h-60 object-cover object-top rounded-t-xl"
         />
         <h3 className="text-lg text-slate-900 font-bold py-2 px-3">
            {event.titulo}
         </h3>
         <div className="grid grid-rows-1 grid-cols-3 items-center p-4">
            <div className="row-start-1 col-start-1">
               <div className="block rounded-lg overflow-hidden bg-slate-300 text-center w-28 m-auto">
                  <div className="bg-slate-800 text-white py-1">
                     {month}
                  </div>
                  <div className="pt-1 border-l border-r">
                     <span className="text-4xl font-bold">{dia}</span>
                  </div>
                  <div className="pb-2 px-2 border-l border-r border-b rounded-b flex justify-between">
                     <span className="text-xs font-bold">{diaSemana}</span>
                     <span className="text-xs font-bold">{year}</span>
                  </div>
               </div>
            </div>
            <div className="row-start-1 col-span-2 flex flex-col gap-4 items-center justify-center">
               <p className="text-slate-900 text-lg font-semibold flex items-center justify-center gap-1">
                  <MdLocationOn /> 
                  <span className="w-4/6">{event.lugar}</span>
               </p>
               <Link
                  to={`/evento/${event._id}`}
                  className="text-slate-900 text-lg font-semibold bg-green-600 py-1 px-4 rounded-lg"
               >
                  Ver Detalles
               </Link>
            </div>
         </div>
      </>
   );
}

export default CardEvent;
