import { NavLink } from "react-router-dom";
import LogoUVM from "../assets/LogoUVM.jpg";
import { BsPower } from "react-icons/bs";

function Navbar() {
   return (
      <nav id="navegacion" className="bg-teal-700">
         <ul className="grid grid-cols-12 gap-x-3 py-3 px-5 items-center text-center">
            <li className="col-start-1">
               <NavLink to={"/dashboard"}>
                  <img
                     src={LogoUVM}
                     alt="Logo UVM"
                     className="h-12 rounded-full m-auto hover:scale-110"
                  />
               </NavLink>
            </li>
            <li className="col-start-9">
               <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                     isActive
                        ? "font-bold text-lg text-white"
                        : "font-bold text-lg text-slate-800"
                  }
               >
                  Home
               </NavLink>
            </li>
            <li className="col-start-10">
               <NavLink
                  to={"/dashboard/events"}
                  className={({ isActive }) =>
                     isActive
                        ? "font-bold text-lg text-white"
                        : "font-bold text-lg text-slate-800"
                  }
               >
                  Eventos
               </NavLink>
            </li>
            <li className="col-start-11">
               <NavLink
                  to={"/dashboard/favoritos"}
                  className={({ isActive }) =>
                     isActive
                        ? "font-bold text-lg text-white"
                        : "font-bold text-lg text-slate-800"
                  }
               >
                  Favoritos
               </NavLink>
            </li>
            <li className="col-start-12">
               <NavLink
                  to={"/dashboard/profile"}
                  className="flex justify-center hover:scale-110"
               >
                  <img
                     src="https://res.cloudinary.com/dtjgc9qlk/image/upload/v1680901101/Eventos%20UVM/1680901103272-usuario.png"
                     alt="Imagen de Perfil"
                     className="w-9"
                  />
               </NavLink>
            </li>
            {/* <NavLink to={"/login"}>
                  <BsPower className="font-black text-2xl text-slate-800 m-auto hover:scale-125" />
               </NavLink> */}
         </ul>
      </nav>
   );
}

export default Navbar;
