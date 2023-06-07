import ReactPlayer from "react-player";
import { useState } from "react";
import { RiCloseFill, RiPlayFill } from "react-icons/ri";
const BotonReproducir = () => {
  const [videoVisible, setVideoVisible] = useState(false);

  const handleBotonClick = () => {
    setVideoVisible(!videoVisible);
  };

  const handleClose = () => {
    setVideoVisible(!videoVisible);
  };

  return (
    <div className="2xl:mt-7">
      <button
        onClick={handleBotonClick}
        className=" transition-all flex items-center font-semibold bg-red-600 px-2 py-1 rounded-2xl mt-1 md:mt-3 2xl:text-3xl "
      >
        <RiPlayFill className="text-lg -ml-1 2xl:text-2xl 2xl:-ml-2" />
        Reproducir
      </button>
      {videoVisible && (
        <div className=" transition-all absolute inset-0 flex items-center justify-center w-full p-1 md:p-4 lg:p-5 z-50">
          <div className=" transition-all relative video-player-container flex items-center w-full h-72 md:h-2/4 lg:h-full ">
            <ReactPlayer
              className="transition-all"
              url="https://www.youtube.com/embed/zHVCjEUUNOE"
              width="100%"
              height="100%"
            />
            <button
              className=" transition-all absolute top-2 right-2 bg-red-500 p-2 rounded-full"
              onClick={handleClose}
            >
              <RiCloseFill />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotonReproducir;
