import { useState } from "react";
import data from "../components/api/Data";

const NuevoVideo = () => {
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");
  const [imagen, setImagen] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  const categorias = data.categorias;

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevoVideo = {
      categoria: categoria,
      name: nombre,
      url: url,
      image: imagen,
    };

    data.videos.push(nuevoVideo);

    setCategoria("");
    setNombre("");
    setUrl("");
    setImagen("");

    console.log(data);
  };

  const handleNuevaCategoriaChange = (event) => {
    setNuevaCategoria(event.target.value);
  };

  const handleAgregarCategoria = (event) => {
    event.preventDefault();

    const nuevaCategoriaObj = {
      id: nuevaCategoria.toLowerCase(),
      name: nuevaCategoria,
    };

    data.categorias.push(nuevaCategoriaObj);

    setNuevaCategoria("");

    console.log(data);
  };

  const [nuevaCard, setNuevaCard] = useState(false);

  const showCategoria = () => {
    setNuevaCard(true);
  };

  const showVideo = () => {
    setNuevaCard(false);
  };

  return (
    <section className="grid h-screen gap-3 p-5 place-content-center lg:ml-56 2xl:-ml-30">
      <div className="flex flex-col gap-5 px-4 py-5 w-80 bg-black/50 md:w-[30rem] lg:w-[35rem] rounded-2xl shadow-lg shadow-black/90">
        <div className="flex justify-between px-4 ">
          <button
            className={`p-1 transition-all md:text-xl md:p-2 rounded-xl ${
              nuevaCard ? "bg-red-600/50" : "bg-red-600/80"
            } hover:bg-red-600/80`}
            onClick={showVideo}
          >
            Nuevo Video
          </button>
          <button
            className={`p-1 transition-all md:text-xl md:p-2 rounded-xl ${
              nuevaCard ? "bg-red-600/80" : "bg-red-600/50"
            } hover:bg-red-600/80`}
            onClick={showCategoria}
          >
            Nueva Categoria
          </button>
        </div>

        {/*Nuevo Video  */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4   ${nuevaCard ? "hidden" : ""}`}
        >
          <div className="flex flex-col w-full gap-y-2">
            <label>
              Nombre <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                className="w-full py-2 pl-2 pr-2 text-gray-800 bg-gray-100 rounded-lg outline-none"
                placeholder="Nombre"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <label>
              Link del video <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className="w-full py-2 pl-2 pr-2 text-gray-800 bg-gray-100 rounded-lg outline-none"
                placeholder="Url"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <label>
              Link imagem del video <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={imagen}
                onChange={(event) => setImagen(event.target.value)}
                className="w-full py-2 pl-2 pr-2 text-gray-800 bg-gray-100 rounded-lg outline-none"
                placeholder="Url"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <label>
              Seleciona una categoría <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <label>Categoría:</label>
              <select
                required
                className="w-full py-2 pl-2 pr-2 text-gray-800 bg-gray-100 rounded-lg outline-none"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              >
                <option value="" disabled>
                  Selecciona una categoría
                </option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="p-2 mt-4 font-semibold transition-all bg-red-400 hover:bg-red-600 rounded-xl "
            type="submit"
          >
            Agregar Video
          </button>
        </form>

        {/* Nueva Categoria */}
        <form
          onSubmit={handleAgregarCategoria}
          className={`flex flex-col  gap-4   ${nuevaCard ? "" : "hidden"}`}
        >
          <div className="flex flex-col w-full gap-y-2">
            <label>
              Nombre de la Categoria <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={nuevaCategoria}
                onChange={handleNuevaCategoriaChange}
                className="w-full py-2 pl-2 pr-2 text-gray-800 bg-gray-100 rounded-lg outline-none"
                placeholder="Nombre de la categoria"
              />
            </div>
          </div>

          <button
            className="p-2 mt-4 font-semibold transition-all bg-red-400 hover:bg-red-600 rounded-xl "
            type="submit"
          >
            Agregar Categoria
          </button>
        </form>
      </div>
    </section>

  );
};

export default NuevoVideo;

