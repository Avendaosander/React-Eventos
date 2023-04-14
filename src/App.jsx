import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthForms from "./pages/AuthForms";
import Notfound from "./pages/NotFound";
import Footer from './components/Footer'
import Eventos from "./pages/Eventos";
import Perfil from "./pages/Perfil";
import Evento from "./pages/Evento";
import Favoritos from "./pages/Favoritos";
import NewEvent from "./pages/NewEvent";
import FormProfile from "./components/FormProfile";
import Welcome from "./pages/Welcome";
import MyEvents from "./pages/MyEvents";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Welcome />}>
                  <Route path="login" element={<AuthForms/>} />
                  <Route path="register" element={<AuthForms/>} />
                  <Route path="register-admin" element={<AuthForms/>} />
               </Route>
               <Route path="/dashboard/*" element={<Home/>} >
                  <Route path="events" element={<Eventos/>} />
                  <Route path="favoritos" element={<Favoritos/>} />
                  <Route path="my-events" element={<MyEvents/>} />
                  <Route path="profile" element={<Perfil/>} />
                  <Route path="update-profile" element={<FormProfile/>} />
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
