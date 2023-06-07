import {
  RiAddFill,
  RiCloseFill,
  RiGithubLine,
  RiLinkedinFill,
  RiMenuFill,
  RiSettings4Fill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import avatar from "../assets/img/avatar.png";
import { useState } from "react";
import DropdownCategorias from "./DropdownCategorias";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const location = useLocation();

  const menuActive = () => {
    setMenuShow(!menuShow);
  };

  return (
    <header className="col-span-6 row-span-5 shadow-lg shadow-red-400/50 ">
      <nav
        className={` lg:left-0 z-10 fixed top-0 ${
          menuShow ? "left-0" : "-left-full"
        }  flex flex-col items-center p-4 bg-black  h-full bg-opacity-70 rounded-tr-lg rounded-br-lg transition-all`}
      >
        <div className="flex flex-col items-center gap-10 mb-10">
          <h1 className="font-bold text-[3rem] text-red-600 z-50">AnimeCity</h1>
          <img src={avatar} alt="avatar" className="w-40 h-40 rounded-full " />
        </div>
        <div className="">
          <div className="flex gap-8 text-2xl ">
            <a
              className="hover:text-[#D81F26] transition-all"
              href="https://github.com/Arnold-MV"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiGithubLine />
            </a>
            <a
              className="hover:text-[#D81F26] transition-all"
              href="mailto:arnold.vilela.98@gmail.com"
              target=""
              rel="noreferrer noopener"
            >
              <SiGmail />
            </a>
            <a
              className="hover:text-[#D81F26] transition-all"
              href="https://www.linkedin.com/in/arnold-anderson-martinez-villela"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiLinkedinFill />
            </a>
          </div>
          <ul className="flex flex-col items-center gap-4 mt-16 text-2xl">
            <li>
              <Link
                onClick={menuActive}
                to="/"
                clos
                className={` hover:border-b-2 border-[#D81f26] transition-all ${
                  location.pathname === "/" ? "border-b-2 border-[#D81F26]" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownCategorias menuActive={menuActive} />
            </li>
            <li className="hidden lg:block">
              <Link
                onClick={menuActive}
                to="/nuevo-video"
                className={`  hover:border-b-2  hover:border-[#D81f26] transition-all ${
                  location.pathname === "/nuevo-video"
                    ? "border-b-2 border-[#D81F26]"
                    : ""
                }`}
              >
                Nuevo video
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                onClick={menuActive}
                to="/editar"
                className={`  transition-all ${
                  location.pathname === "/editar"
                    ? "border-b-2 border-[#D81F26]"
                    : ""
                }`}
              >
                Editar-Eliminar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="fixed bottom-0 left-0 z-40 flex items-center justify-between w-full h-16 p-4 text-3xl bg-black lg:hidden">
        <Link
          className={`transition-all ${
            location.pathname === "/editar" ? "text-[#D81F26]" : ""
          }`}
          to="/editar"
        >
          <RiSettings4Fill />
        </Link>
        <Link
          className={` transition-all ${
            location.pathname === "/nuevo-video" ? "text-[#D81F26]" : ""
          }`}
          to="/nuevo-video"
        >
          <RiAddFill />
        </Link>

        <button
          onClick={menuActive}
          className={`  ${
            menuShow ? "text-white bg-red-600 rounded-full " : ""
          }`}
        >
          {menuShow ? <RiCloseFill /> : <RiMenuFill />}
        </button>
      </div>
    </header>
  );
};

export default Header;
