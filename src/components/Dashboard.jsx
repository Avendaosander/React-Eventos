import React, { useEffect, useState } from 'react'
import NextEvents from './NextEvents'
import RecentEvents from './RecentEvents'
import bgSlider from '../assets/FONDO-HOME-SLIDER4.jpg'

function Dashboard() {
   const [nextEvents, setNextEvents] = useState([])
   // const [todayEvents, setTodayEvents] = useState([])
   const [recentsEvents, setRecentsEvents] = useState([])
   
   useEffect(() => {
      const obtenerDashboard = async() => {
         await fetch('http://localhost:3000/app/dashboard')
            .then(res => res.json())
            .then(res => {
               setNextEvents(res.proximos)
               // setTodayEvents(res.eventsToday)
               setRecentsEvents(res.recientes)
            })
      }
      obtenerDashboard()
   }, [])
   
   return (
      <>
         <section>
            <img src={bgSlider} alt="Slider" className="w-full h-96 object-cover object-top" />
         </section>
         <section className="bg-slate-200 grid grid-cols-3 justify-evenly w-full gap-10 py-10 px-20 text-center">
            <article className="bg-facultad1 bg-cover bg-center flex items-center justify-center rounded-xl text-xl font-semibold text-slate-200 shadow-slate-800 shadow-2xl hover:scale-105">
               <div className='w-full h-full bg-slate-600/30 rounded-xl p-20 flex justify-center items-center'>
                  <h3>Facultad de Ingenieria</h3>
               </div>
            </article>
            <article className="bg-facultad2 bg-cover bg-center flex items-center justify-center rounded-xl text-xl font-semibold text-slate-200 shadow-slate-800 shadow-2xl hover:scale-105">
               <div className='w-full h-full bg-slate-600/30 rounded-xl p-20 flex justify-center items-center'>
                  <h3>Facultad de Ciencias Economicas, Administrativas y Gerenciales</h3>
               </div>
            </article>
            <article className="bg-facultad3 bg-cover bg-center flex items-center justify-center rounded-xl text-xl font-semibold text-slate-200 shadow-slate-800 shadow-2xl hover:scale-105">
               <div className='w-full h-full bg-slate-600/30 rounded-xl p-20 flex justify-center items-center'>
                  <h3>Facultad de Ciencias Juridicas, Politicas y Sociales</h3>
               </div>
            </article>
         </section>
         <section className="flex flex-col justify-center items-center text-center pb-5">
            <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
               Proximos Eventos
            </h2>
            <div className="grid grid-cols-3 gap-10 px-20">
               <NextEvents eventos={nextEvents}/>
            </div>
         </section>
         <section className="flex flex-col justify-center items-center text-center pb-5">
            <h2 className="text-center text-2xl font-bold text-slate-800 p-4">Ultimos Eventos</h2>
            <div className="grid grid-cols-3 gap-10 px-20">
               <RecentEvents eventos={recentsEvents}/>
            </div>
         </section>
      </>
   )
}

export default Dashboard