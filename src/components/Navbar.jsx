import { NavLink } from "react-router-dom";
import LogoUVM from "../assets/LogoUVM.jpg";
import { BsPower } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
   return (
      <nav className="bg-teal-700">
         <ul className="grid grid-cols-12 gap-x-3 py-3 px-5 items-center text-center">
            <li className="col-start-1">
               <NavLink to={"."}>
                  <img
                     src={LogoUVM}
                     alt="Logo UVM"
                     className="h-12 rounded-full m-auto hover:scale-110"
                  />
               </NavLink>
            </li>
            <li className="col-start-10">
               <NavLink
                  to={"."}
                  className={({ isActive }) =>
                  isActive
                     ? "font-bold text-lg text-white"
                     : "font-bold text-lg text-slate-800"
               }
               >
                  Home
               </NavLink>
            </li>
            <li className="col-start-11">
               <NavLink
                  to={"events"}
                  className={({ isActive }) =>
                     isActive
                        ? "font-bold text-lg text-white"
                        : "font-bold text-lg text-slate-800"
                  }
               >
                  Eventos
               </NavLink>
            </li>
            <li className="col-start-12">
               <NavLink
                  to={"profile"}
                  className={({ isActive }) =>
                     isActive
                        ? "font-bold text-lg text-white flex justify-center"
                        : "font-bold text-lg text-slate-800 flex justify-center"
                  }
               >
                  <FaRegUserCircle className="text-4xl"/>
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
