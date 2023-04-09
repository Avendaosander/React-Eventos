import React from "react";
import { useState } from "react";
import { BsCalendarDate, BsPinMap, BsStarFill, BsStar } from "react-icons/bs";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { Link } from "react-router-dom";

function CardEvent({ event, favorite = false }) {
   const [fav, setFav] = useState(favorite);
   
   const handleFavorite = () => {
      const validateFavorite = async() => {
         await fetch(`http://localhost:3000/app/add-favorite/${event._id}`,{ 
            method: 'POST',
            headers: { 
               "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
               userID
            })
         })
            .then(res => res.json())
            .then(res => setFav(res.fav))
      }
      // validateFavorite()
      return fav ? setFav(false) : setFav(true);
   };
   // console.log(fav);
   return (
      <>
         <button className="absolute right-2 top-2" onClick={handleFavorite}>
            {fav ? (
               <BsStarFill className="text-yellow-400  text-2xl hover:scale-125" />
            ) : (
               <BsStar className="text-white  text-2xl hover:scale-125" />
            )}
         </button>

         <img
            src={!event.imagen ? bgSlider : event.imagen.secure_url}
            alt="Evento"
            className="w-full h-60 object-cover object-top rounded-t-xl"
         />
         <h3 className="text-xl text-slate-800 font-bold py-2">
            {event.title}
         </h3>
         <div className="grid grid-rows-1 grid-cols-2 items-center p-4">
            <div className="row-start-1 col-start-1">
               <BsCalendarDate className="w-full text-8xl" />
            </div>
            <div className="row-start-1 col-start-2 flex flex-col gap-4 items-center justify-center">
               <p className="text-slate-900 text-lg font-semibold flex items-center gap-1">
                  <BsPinMap /> {event.lugar}
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
