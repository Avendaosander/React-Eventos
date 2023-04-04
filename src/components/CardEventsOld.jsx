import React from "react";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { BsCalendarX } from "react-icons/bs";
import { Link } from "react-router-dom";

function CardEventsOld({ event }) {
   return (
      <>
         <img
            src={!event.imagen ? bgSlider : event.imagen.secure_url}
            alt="Evento"
            className="w-full h-60 object-cover object-top rounded-t-xl"
         />
         <h3 className="text-xl text-slate-800 font-bold">{event.title}</h3>
         <p className="text-slate-900 text-lg font-semibold flex items-center gap-1">
            <BsCalendarX /> Evento Finalizado
         </p>
         <Link
            to={`/evento/${event._id}`}
            className="text-slate-900 text-lg font-semibold bg-green-600 py-1 px-4 rounded-lg"
         >
            Ver Detalles
         </Link>
      </>
   );
}

export default CardEventsOld;
