import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

function Home() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   
   
   useEffect(() => {
      if ("token" in localStorage === false) {
         return navigate("/login");
      }
   }, [])

   return (
      <>
         <Navbar/>
         <main className="text-center pb-10">
            {pathname === '/dashboard' ? <Dashboard/> : <Outlet/>}
         </main>
      </>
   )
}

export default Home;
