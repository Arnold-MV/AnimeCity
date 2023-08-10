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
        className="flex items-center px-2 py-1 mt-1 font-semibold transition-all bg-red-600 rounded-2xl md:mt-3 2xl:text-3xl"
      >
        <RiPlayFill className="-ml-1 text-lg 2xl:text-2xl 2xl:-ml-2" />
        Reproducir
      </button>
      {videoVisible && (
        <div className="z-[100] fixed inset-0 z-50 flex items-center justify-center w-full p-1 md:p-4 lg:p-5">
          <div className="relative flex items-center w-full transition-all video-player-container h-72 md:h-2/4 xl:h-full">
            <ReactPlayer
              className="transition-all"
              url="https://www.youtube.com/embed/zHVCjEUUNOE"
              width="100%"
              height="100%"
            />
            <button
              className="absolute p-2 transition-all bg-red-500 rounded-full top-2 right-2"
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
