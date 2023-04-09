import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/NotFound";
import Footer from './components/Footer'
import Eventos from "./pages/Eventos";
import Perfil from "./pages/Perfil";
import Evento from "./pages/Evento";
import Favoritos from "./pages/Favoritos";
import NewEvent from "./pages/NewEvent";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />}>
                  <Route path="login" element={<FormLogin />} />
                  <Route path="register" element={<FormRegister />} />
                  <Route path="register-admin" element={<FormRegister />} />
               </Route>
               <Route path="/dashboard/*" element={<Home/>} >
                  <Route path="events" element={<Eventos/>} />
                  <Route path="favoritos" element={<Favoritos/>} />
                  <Route path="my-events" element={<Eventos/>} />
                  <Route path="profile" element={<Perfil/>} />
               </Route>
               <Route path="/evento/:eventID" element={<Evento/>} />
               <Route path="/new-event" element={<NewEvent/>} />
               <Route path="*" element={<Notfound />} />
            </Routes>
         </BrowserRouter>
         <Footer/>
      </>
   );
}

export default App;
