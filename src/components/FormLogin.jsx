import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import  from '../context/AuthContext'

function FormLogin() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navegar = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(email, password);
      if (email === "") return;
      if (password === "") return;

      const login = async () => {
         await fetch(`http://localhost:3000/login`,{ 
            method: 'POST',
            headers: { 
               "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
               email,
               password
            })
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) return console.error(res.messageError)
               // console.log(res.token);
               setEmail("");
               setPassword("");
               localStorage.setItem("token", JSON.stringify(res.token));
               localStorage.setItem("imgPerfil", JSON.stringify(res.user.imgPerfil));
               localStorage.setItem("favorites", JSON.stringify(res.user.favorites));
               localStorage.setItem("rol", JSON.stringify(res.user.rol));
               navegar("/dashboard")
            })
      };
      login();
   };

   return (
      <form
         className="flex justify-around flex-col gap-3 px-10 py-10 bg-slate-800 w-3/5 h-4/5 m-auto rounded-3xl text-center"
         onSubmit={handleSubmit}
      >
         <h1 className="text-white text-xl font-bold">Inicia Sesión</h1>
         <input
            className="rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600"
            type="text"
            id="Email"
            placeholder="Correo Electrónico"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoFocus
         />
         <input
            className="rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600"
            type="password"
            id="Password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
         />
         <button
            type="submit"
            className="bg-green-600 py-2 rounded-xl w-full text-center text-slate-900 font-semibold mx-auto"
         >
            Iniciar Sesión
         </button>
         <a href="#" className="text-white font-light">
            ¿Has olvidado tu contraseña?
         </a>
         <Link
            to={"/register"}
            className="bg-green-600 py-1 rounded-xl w-3/6 text-center text-slate-900 font-semibold mx-auto"
         >
            Crear Cuenta
         </Link>
      </form>
   );
}

export default FormLogin;
