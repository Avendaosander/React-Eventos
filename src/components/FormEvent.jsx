import { useState } from "react";
import bgSlider from "../assets/FONDO-HOME-SLIDER4.jpg";
import { VscAdd } from "react-icons/vsc";

function FormEvent() {
   const [preview, setPreview] = useState('');
   const [titulo, setTitulo] = useState('')
   const [imagen, setImagen] = useState(null)
   const [organizador, setOrganizador] = useState('')
   const [participantes, setParticipantes] = useState([])
   const [fecha, setFecha] = useState('')
   const [hora, setHora] = useState('')
   const [duracion, setDuracion] = useState('')
   const [lugar, setLugar] = useState('')
   const [descripcion, setDescripcion] = useState([])
   const [keywords, setKeywords] = useState([])
   
   const handleFile = (e) => {
      let selectFile = e.target.files[0];
      if (!selectFile) return;
      setImagen(selectFile)
      setPreview(URL.createObjectURL(selectFile));
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      const body = {
         titulo,
         imagen,
         organizador,
         participantes,
         fecha,
         hora,
         duracion,
         lugar,
         descripcion,
         keywords
      }
      console.log(body);
   }
   return (
      <form className="grid grid-cols-10 grid-rows-11 gap-x-8 gap-y-3 px-10 mb-10 items-center" onSubmit={handleSubmit}>
         <section className="col-span-10 row-span-1 flex w-2/6 m-auto">
            <label htmlFor="titulo" className="hidden"></label>
            <input
               type="text"
               placeholder="Titulo"
               onChange={(e) => setTitulo(e.target.value)}
               value={titulo}
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl text-center"
            />
         </section>
         <section className="col-span-5 row-span-5 rounded-2xl h-full w-4/5 m-auto relative">
            <label
               htmlFor="imagen"
               className="cursor-pointer flex justify-center items-center bg-teal-600 rounded-full w-10 h-10 absolute right-5 top-32"
            >
               <VscAdd className="text-slate-800 relative text-xl m-1" />
            </label>
            <input
               type="file"
               id="imagen"
               name="imagen"
               className="hidden"
               onChange={handleFile}
            />
            <img
               src={preview === '' ? bgSlider : preview}
               alt="Imagen del Evento"
               className="w-[28rem] h-72 object-cover ring-2 ring-slate-500/30 m-auto rounded-xl"
            />
         </section>
         <section className="col-span-3 row-span-5 flex flex-col gap-2">
            <label
               htmlFor="organizador"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Organizador:
            </label>
            <label
               htmlFor="participantes"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Participantes:
            </label>
            <label
               htmlFor="fecha"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Fecha:
            </label>
            <label
               htmlFor="hora"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Hora:
            </label>
            <label
               htmlFor="duracion"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Duracion:
            </label>
            <label
               htmlFor="lugar"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Lugar del Evento:
            </label>
         </section>
         <section className="col-span-2 row-span-5 flex flex-col gap-2">
            <input
               type="text"
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl"
               placeholder="organizador"
               id="organizador"
               name="organizador"
               onChange={(e) => setOrganizador(e.target.value)}
               value={organizador}
            />
            <input
               type="text"
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl"
               placeholder="participantes"
               id="participantes"
               name="participantes"
               onChange={(e) => setParticipantes(e.target.value)}
               value={participantes}
            />
            <input
               type="date"
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl"
               placeholder="fecha"
               id="fecha"
               name="fecha"
               onChange={(e) => setFecha(e.target.value)}
               value={fecha}
            />
            <input
               type="time"
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl"
               placeholder="hora"
               id="hora"
               name="hora"
               onChange={(e) => setHora(e.target.value)}
               value={hora}
            />
            <input
               type="time"
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl"
               placeholder="duracion"
               id="duracion"
               name="duracion"
               onChange={(e) => setDuracion(e.target.value)}
               value={duracion}
            />
            <input
               type="text"
               className="bg-slate-400/40 w-full text-lg py-1 px-3 rounded-xl"
               placeholder="lugar"
               id="lugar"
               name="lugar"
               onChange={(e) => setLugar(e.target.value)}
               value={lugar}
            />
         </section>
         <section className="col-span-10 row-span-4 text-center grid grid-cols-3">
            <div className="col-span-2 flex flex-col items-center">
               <label
                  htmlFor="descripcion"
                  className="text-center text-xl font-bold text-slate-800 p-1"
               >
                  Descripcion
               </label>
               <textarea
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion del evento"
                  minLength={120}
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                  className="bg-slate-400/40 w-5/6 text-lg py-1 px-3 rounded-xl"
               ></textarea>
            </div>
            <div>
               <label
                  htmlFor="keywords"
                  className="text-center text-xl font-bold text-slate-800 p-1"
               >
                  Palabras Claves:
               </label>
               <input
                  type="text"
                  name="keywords"
                  id="keywords"
                  placeholder="Keywords"
                  onChange={(e) => setKeywords(e.target.value)}
                  value={keywords}
                  className="bg-slate-400/40 w-5/6 text-lg py-1 px-3 rounded-xl text-center"
               />
            </div>
         </section>
         <section className="col-span-10 row-span-1 flex items-center justify-center">
            <label
               htmlFor="facultad"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Facultad:
            </label>
            <select name="facultad" id="facultad">
               <option value="Facultad de Ingenieria">Facultad de Ingenieria</option>
               <option value="Facultad de Derecho">Facultad de Derecho</option>
               <option value="Facultad de Economia">Facultad de Economia</option>
            </select>
            <label
               htmlFor="facultad"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Categorias:
            </label>
            <select name="facultad" id="facultad">
               <option value="Facultad de Ingenieria">Facultad de Ingenieria</option>
               <option value="Facultad de Derecho">Facultad de Derecho</option>
               <option value="Facultad de Economia">Facultad de Economia</option>
            </select>
            <label
               htmlFor="facultad"
               className="text-lg font-bold text-slate-800 p-1"
            >
               Tipo de eventos:
            </label>
            <select name="facultad" id="facultad">
               <option value="Facultad de Ingenieria">Facultad de Ingenieria</option>
               <option value="Facultad de Derecho">Facultad de Derecho</option>
               <option value="Facultad de Economia">Facultad de Economia</option>
            </select>
         </section>
         <button
            type="submit"
            className="text-white text-lg font-semibold bg-teal-600 py-1 px-4 rounded-lg col-span-10 w-2/12 m-auto"
         >
            Crear evento
         </button>
      </form>
   )
}

export default FormEvent