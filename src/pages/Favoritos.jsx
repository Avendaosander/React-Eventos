import { useEffect, useState } from 'react'
import CardEvent from '../components/CardEvent';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt"

function Favoritos() {
   const [events, setEvents] = useState([]);
   const decodedID = decodeToken(JSON.parse(localStorage.getItem("token")))
   const userID = decodedID.id
   const navigate = useNavigate()

   const obtenerEventos = async () => {
      await fetch(
         `http://localhost:3000/app/favorites/${userID}`
      )
         .then((res) => res.json())
         .then((res) => {
            setEvents(res.eventos);
         });
   };
   
   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
      obtenerEventos();
   }, [])

   const handleFavPage = () => {
      obtenerEventos();
   }
   return (
      <>
         <h2 className="text-center text-2xl font-bold text-slate-800 pt-4">
            Favoritos
         </h2>
         <section className="grid grid-cols-3 gap-10 px-20 py-5">
            {!events ? null : events.map((evento) => (
               <article
                  className="relative rounded-xl bg-teal-700 flex flex-col hover:scale-105"
                  key={evento._id}
               >
                  <CardEvent event={evento} favorite handleFavPage={handleFavPage}/>
               </article>
            ))}
         </section>
      </>
   )
}

export default Favoritos