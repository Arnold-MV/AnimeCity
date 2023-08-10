import  { useEffect, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import data from "./api/Data"; // Ruta correcta al archivo data

const DropdownCategorias = ({ menuActive }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Aquí ya no necesitas la llamada fetch() porque tienes los datos directamente en 'data'
    setCategories(data.categorias);
  }, []);

  const activeDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={activeDropdown}
        className="flex items-center gap-2 transition-all border-b-2 border-none"
      >
        Categorias {showDropdown ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </button>

      <div
        className={`absolute z-50 flex flex-col p-1 mt-8 text-lg font-normal text-center transition-all bg-red-500 rounded-md w-32 ${
          showDropdown ? "" : "hidden"
        }`}
      >
        {categories.map((categoria) => {
          return (
            <Link
              key={categoria.id}
              onClick={() => {
                activeDropdown();
                menuActive();
              }}
              className="rounded-md hover:bg-red-300"
              to={`/video/${categoria.name}`}
            >
              {categoria.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownCategorias;
