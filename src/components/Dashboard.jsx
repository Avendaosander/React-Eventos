import { useEffect, useState } from "react";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { useNavigate } from "react-router-dom";
import CardEvent from "./CardEvent";
import CardEventsOld from "./CardEventsOld";

function Dashboard() {
   const [nextEvents, setNextEvents] = useState([]);
   // const [todayEvents, setTodayEvents] = useState([])
   const [recentsEvents, setRecentsEvents] = useState([]);
   const [favoritos, setFavoritos] = useState([]);
   const navigate = useNavigate();
   const token = JSON.parse(localStorage.getItem("token"));

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      const favoritos = JSON.parse(localStorage.getItem("favorites"));
      if(favoritos) setFavoritos(favoritos);
      const obtenerDashboard = async () => {
         await fetch("http://localhost:3000/app/dashboard",{
            headers: { Authorization: `Bearer ${token}` }
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) {
                  return console.error(res.messageError);
               }
               setNextEvents(res.proximos);
               // setTodayEvents(res.eventsToday)
               setRecentsEvents(res.recientes);
            });
      };
      obtenerDashboard();
   }, []);

   return (
      <>
         <section>
            <img
               src={bgSlider}
               alt="Slider"
               className="w-full h-96 object-cover object-top"
            />
         </section>
         <section className="bg-slate-200 grid grid-cols-3 justify-evenly w-full gap-10 py-10 px-20 text-center">
            <article className="bg-facultad1 bg-cover bg-center flex items-center justify-center rounded-xl text-xl font-semibold text-slate-200 shadow-slate-800 shadow-2xl hover:scale-105">
               <div className="w-full h-full bg-slate-600/30 rounded-xl p-20 flex justify-center items-center">
                  <h3>Facultad de Ingenieria</h3>
               </div>
            </article>
            <article className="bg-facultad2 bg-cover bg-center flex items-center justify-center rounded-xl text-xl font-semibold text-slate-200 shadow-slate-800 shadow-2xl hover:scale-105">
               <div className="w-full h-full bg-slate-600/30 rounded-xl p-20 flex justify-center items-center">
                  <h3>
                     Facultad de Ciencias Economicas, Administrativas y
                     Gerenciales
                  </h3>
               </div>
            </article>
            <article className="bg-facultad3 bg-cover bg-center flex items-center justify-center rounded-xl text-xl font-semibold text-slate-200 shadow-slate-800 shadow-2xl hover:scale-105">
               <div className="w-full h-full bg-slate-600/30 rounded-xl p-20 flex justify-center items-center">
                  <h3>Facultad de Ciencias Juridicas, Politicas y Sociales</h3>
               </div>
            </article>
         </section>
         <section className="flex flex-col justify-center items-center text-center pb-5">
            <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
               Proximos Eventos
            </h2>
            <div className="grid grid-cols-3 gap-10 px-20">
               {nextEvents.length === 0 ? (
                  <h2 className="text-center text-xl font-bold text-slate-800 p-4">
                     No hay eventos proximos
                  </h2>
               ) : (
                  <></>
               )}
               {nextEvents.map(evento => (
                  <article
                     className="relative rounded-xl bg-teal-700 flex flex-col hover:scale-105"
                     key={evento._id}
                  >
                     <CardEvent
                        event={evento}
                        favorite={favoritos.includes(evento._id) ? true : false}
                     />
                  </article>
               ))}
            </div>
         </section>
         <section className="flex flex-col justify-center items-center text-center pb-5">
            <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
               Ultimos Eventos
            </h2>
            <div className="grid grid-cols-3 gap-10 px-20">
               {recentsEvents.length === 0 ? (
                  <h2 className="text-center text-xl font-bold text-slate-800 p-4">
                     No hay eventos recientes
                  </h2>
               ) : (
                  <></>
               )}
               {recentsEvents.map(evento => (
                  <article
                     className="rounded-xl bg-teal-700 flex flex-col items-center pb-4 gap-3 hover:scale-105"
                     key={evento._id}
                  >
                     <CardEventsOld event={evento} />
                  </article>
               ))}
            </div>
         </section>
      </>
   );
}

export default Dashboard;
