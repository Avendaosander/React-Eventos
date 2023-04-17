import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import CardEvent from "../components/CardEvent";
import { useNavigate } from "react-router-dom";

function Eventos() {
   const [events, setEvents] = useState([]);
   const [favoritos, setFavoritos] = useState([])
   const [busqueda, setBusqueda] = useState("");
   const token = JSON.parse(localStorage.getItem("token"));
   const navigate = useNavigate()

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      const favoritos = JSON.parse(localStorage.getItem("favorites"))
      if(favoritos) setFavoritos(favoritos);
      const obtenerEventos = async() => {
         await fetch('http://localhost:3000/app/events',{
            headers: { Authorization: `Bearer ${token}` }
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) {
                  return console.error(res.messageError);
               }
               setEvents(res.eventos)
            })
      }
      obtenerEventos()
   }, [])
   // console.log(events);

   if (events.length === 0)
      return (
         <h2 className="text-center text-xl font-bold text-slate-800 p-4">
            No hay eventos proximos
         </h2>
      );

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Eventos que coinciden con: ${busqueda}`);

      setBusqueda('')
   };

   const handleFilter = (e) => {
      e.preventDefault();
      console.log("Eventos por filtro");
   };

   const handleOrder = (e) => {
      e.preventDefault();
      console.log("Eventos por Orden");
   };

   return (
      <>
         <h2 className="text-center text-2xl font-bold text-slate-800 pt-4">
            Eventos
         </h2>
         <form className="py-4 px-20 flex justify-center" onSubmit={handleSubmit}>
            <input
               type="text"
               className="bg-teal-100 w-3/5 px-5 py-1 ring-1 ring-teal-300 text-slate-900 font-medium outline-none rounded-lg focus:ring-2 focus:ring-teal-600"
               onChange={(e) => setBusqueda(e.target.value)}
               value={busqueda}
               autoFocus
            />
            <button className="bg-teal-600 ml-2 py-1 px-2 rounded-xl text-center text-white font-semibold">
               <FaSearch className="text-xl"/>
            </button>
            <button className="bg-teal-600 ml-2 py-1 px-4 rounded-xl text-center text-white font-semibold" onClick={handleFilter}>
               Filtrar por:
            </button>
            <button className="bg-teal-600 ml-2 py-1 px-4 rounded-xl text-center text-white font-semibold" onClick={handleOrder}>
               Ordenar por:
            </button>
         </form>
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

export default Eventos;
