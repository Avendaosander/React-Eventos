import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import FormEvent from "../components/FormEvent";

function NewEvent() {
   const navigate = useNavigate()

   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
   }, [])
   
   return (
      <>
         <Navbar />
         <main>
            <h2 className="text-center text-2xl font-bold text-slate-800 p-4">
               Crear nuevo evento
            </h2>
            <FormEvent/>
         </main>
      </>
   );
}

export default NewEvent;
