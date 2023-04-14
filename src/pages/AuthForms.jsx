import { useLocation } from "react-router-dom";
import WelcomeUVM from "../assets/WelcomeUVM.jpg";
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";


function AuthForms() {
   const { pathname } = useLocation()

   return (
      <div className="grid grid-cols-2 h-[35rem]">
         <aside className="text-center flex flex-col gap-5 items-center justify-center h-full">
            <h2 className="text-slate-800 font-bold text-xl">BIENVENIDO/A!</h2>
            <img src={WelcomeUVM} alt="Estudiantes UVM" className="w-8/12 rounded-2xl shadow-slate-800 shadow-2xl"/>
         </aside>
         {pathname === '/login' && <FormLogin />}
         {pathname === '/register' && <FormRegister />}
         {pathname === '/register-admin' && <FormRegister />}
      </div>
   )
}

export default AuthForms