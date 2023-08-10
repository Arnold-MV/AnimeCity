import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import Tendencias from "./Tendencias";
import BotonReproducir from "./BotonReproducir";
import { GiFlamer } from "react-icons/gi";
import data from "./api/Data"; // Importar el componente de datos
import bgBamer from "../assets/img/baner.jpg"

const Main = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleBotonClick = (video) => {
    setSelectedVideo(video);
    setVideoVisible(true);
  };

  const handleClose = () => {
    setSelectedVideo(null);
    setVideoVisible(false);
  };

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(data.videos); // Usar los datos del componente 'data' en lugar de hacer una llamada fetch
  }, []);

  return (
    <main className="">
      <section
        style={{
          backgroundImage: `url(${bgBamer})`,
        }}
        className="w-full grid-cols-8 bg-no-repeat bg-cover lg:grid "
      >
        <div className="px-4 py-3 lg:col-span-6 lg:col-start-3">
          <div>
            <div className="mt-10 md:mt-24 lg:mt-48 2xl:mt-60">
              <h3 className="flex items-center gap-2 text-sm font-semibold md:text-base lg:text-xl 2xl:text-3xl">
                <GiFlamer className="text-lg text-red-600" /> SERIE
              </h3>
              <h2 className="font-bold text-2xl md:text-7xl lg:text-[3.3rem] 2xl:text-[4.3rem]">
                BLACK CLOVER
              </h2>
            </div>
            <div className="text-gray-200 font-normal pr-11 mt-2 md:pr-[20rem] md:mt-4 2xl:pr-[28rem] 2xl:mt-11">
              <p className="text-sm md:text-xl lg:text-2xl 2xl:text-[2.1rem]">
                La historia de Black Clover nos pone en la piel de un joven
                llamado Asta, el cual quiere convertirse en el mago más grande
                del reino.
              </p>
            </div>
          </div>
          <BotonReproducir />
          <div className="mt-2 md:mt-4 2xl:mt-14 2xl:mb-1">
            <h3 className="font-semibold lg:text-xl 2xl:text-3xl">
              Tendencias
            </h3>
            <Tendencias />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 col-span-5 col-start-2 row-start-6 gap-4 px-4 pb-16 mt-20 2xl:mt-4 2xl:md:grid-cols-3 lg:pl-64">
        {videos.map((video) => (
          <div
            key={video.name}
            className="flex flex-col items-center gap-1 p-2 shadow-xl bg-black/50 rounded-xl"
          >
            <button
              onClick={() => handleBotonClick(video)}
              className="w-full shrink-0 snap-center"
            >
              <img className="shadow-lg rounded-xl" src={video.image} alt="" />
            </button>
            <h3 className="text-sm font-normal text-center">{video.name}</h3>
          </div>
        ))}

        {videoVisible && selectedVideo && (
          <div className="z-[100] fixed inset-0 z-50 flex items-center justify-center w-full p-1 md:p-4 lg:p-5">
            <div className="relative flex items-center w-full video-player-container h-72 md:h-2/4 xl:h-full">
              <ReactPlayer url={selectedVideo.url} width="100%" height="100%" />
              <button
                className="absolute p-2 bg-red-500 rounded-full top-2 right-2"
                onClick={handleClose}
              >
                <RiCloseFill />
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
