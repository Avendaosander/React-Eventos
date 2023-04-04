import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import WelcomeUVM from "../assets/WelcomeUVM.jpg";
import FormLogin from "../components/FormLogin";


function Login() {
   const { pathname } = useLocation()
   
   useEffect(() => {
      document.getElementById('footer').classList.add('absolute-footer')
   }, [])
   

   return (
      <div className="grid grid-cols-2 h-screen pb-56">
         <aside className="text-center flex flex-col gap-5 items-center justify-center h-full">
            <h2 className="text-slate-800 font-bold text-xl">BIENVENIDO/A!</h2>
            <img src={WelcomeUVM} alt="Estudiantes UVM" className="w-8/12 rounded-2xl shadow-slate-800 shadow-2xl"/>
         </aside>
         {pathname === '/' ? <FormLogin/> : <Outlet/>}
      </div>
   )
}

export default Login