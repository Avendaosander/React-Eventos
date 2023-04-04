import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

function Home() {
   const { pathname } = useLocation()

   useEffect(() => {
      document.getElementById('footer').classList.remove('absolute-footer')
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
