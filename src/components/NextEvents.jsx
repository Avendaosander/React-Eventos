import React from "react";
import CardEvent from "./CardEvent";
import { useState, useEffect } from "react";

function NextEvents({eventos}) {
   const [events, setEvents] = useState([]);

   useEffect(() => {
      if (eventos) setEvents(eventos);
   }, [eventos]);
   // console.log(eventos);

   if (events.length === 0)
      return (
         <h2 className="text-center text-xl font-bold text-slate-800 p-4">
            No hay eventos proximos
         </h2>
      );

   return (
      <>
         {events.map((evento) => (
            <article
               className="relative rounded-xl bg-teal-700 flex flex-col hover:scale-105"
               key={evento._id}
            >
               <CardEvent event={evento} />
            </article>
         ))}
      </>
   );
}

export default NextEvents;
