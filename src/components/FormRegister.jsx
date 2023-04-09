import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function FormRegister() {
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [repeatPassword, setRepeatPassword] = useState("");
   const navegar = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(email, password);
      if (email === "") return;
      if (password === "") return;
      if (password !== repeatPassword) return console.warn("Las contraseñas no coinciden");

      const register = async () => {
         await fetch(`http://localhost:3000/register`,{ 
            method: 'POST',
            headers: { 
               "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
               username,
               email,
               password
            })
         })
            .then(res => res.json())
            .then(res => {
               if (res.messageError) return console.error(res.messageError)
               // console.log(res.token);
               setUsername("");
               setEmail("");
               setPassword("");
               setRepeatPassword("");
               localStorage.setItem("token", JSON.stringify(res.token));
               navegar("/dashboard")
            })
      };
      register();
   }

   return (
      <form className="flex justify-around flex-col gap-6 px-10 py-10 bg-slate-800 w-3/5 h-5/6 m-auto rounded-3xl text-center" onSubmit={handleSubmit}>
         <h1 className="text-white text-xl font-bold">Registrate</h1>
         {/* <label htmlFor="Email" className="text-slate-100 text-xl">Email</label> */}
         <input 
            className="rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600"
            type="text"
            id="Username"
            placeholder="Nombre de Usuario"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            autoFocus
         />
         <input 
            className="rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600"
            type="text"
            id="Email"
            placeholder="Correo Electrónico"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
         />
         {/* <label htmlFor="Password" className="text-slate-100 text-xl">Password</label> */}
         <input 
            className="rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600"
            type="password"
            id="Password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
         />
         <input 
            className="rounded-xl px-5 py-2 outline-none focus:ring focus:ring-green-600"
            type="password"
            id="RepeatPassword"
            placeholder="Repite la Contraseña"
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
         />
         <button type="submit" className="bg-green-600 py-2 rounded-xl w-full text-center text-slate-900 font-semibold mx-auto">Registrate</button>
         <Link to={'/login'} className="text-white font-light">¿Ya tienes una cuenta?</Link>
      </form>
   );
}

export default FormRegister;
