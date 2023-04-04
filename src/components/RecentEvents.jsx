import React from 'react'
import { useState, useEffect } from 'react';
import CardEventsOld from './CardEventsOld';

function RecentEvents({eventos}) {
   const [events, setEvents] = useState([]);

   useEffect(() => {
      if (eventos) setEvents(eventos);
   }, [eventos]);
   // console.log(eventos);

   if (events.length === 0) return <h2 className="text-center text-xl font-bold text-slate-800 p-4">No hay eventos proximos</h2>

   return (
      <>
         {events.map((evento) => (
            <article className="rounded-xl bg-teal-700 flex flex-col items-center pb-4 gap-3 hover:scale-105" key={evento._id}>
               <CardEventsOld event={evento}/>
            </article>
         ))}
      </>
   )
}

export default RecentEvents