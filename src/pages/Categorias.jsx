import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import ReactPlayer from "react-player";
import { GiFlamer } from "react-icons/gi";
import data from "../components/api/Data"; // Importar el componente de datos

const Categorias = () => {
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

  const { categoria } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(data.videos.filter((video) => video.categoria === categoria));
  }, [categoria]);

  return (
    <main className="h-screen mb-36 sm:mb-80 md:-mb-36 2xl:mb-44">
      <h2 className="flex items-center gap-2 px-5 px-10 py-4 text-xl font-semibold md:text-base lg:text-2xl 2xl:text-3xl lg:pl-64 2xl:pt-10">
        <GiFlamer className="text-xl text-red-600 lg:text-2xl" /> {categoria}
      </h2>

      <section className="">
        {videos && videos.length > 0 ? (
          <div className="grid grid-cols-2 col-span-5 col-start-2 row-start-6 gap-4 px-4 pb-16 2xl:md:grid-cols-3 lg:pl-64">
            {videos.map((video) => (
              <div
                key={video.name}
                className="flex flex-col items-center gap-1 p-2 bg-black bg-opacity-50 shadow-xl rounded-xl"
              >
                <button
                  onClick={() => handleBotonClick(video)}
                  className="w-full shrink-0 snap-center"
                >
                  <img
                    className="shadow-lg rounded-xl"
                    src={video.image}
                    alt=""
                  />
                </button>
                <h3 className="text-sm font-normal text-center">
                  {video.name}
                </h3>
              </div>
            ))}

            {videoVisible && selectedVideo && (
              <div className="z-[100] fixed inset-0 z-50 flex items-center justify-center w-full p-1 md:p-4 lg:p-5">
                <div className="relative flex items-center w-full h-full video-player-container">
                  <ReactPlayer
                    url={selectedVideo.url}
                    width="100%"
                    height="100%"
                  />
                  <button
                    className="absolute p-2 bg-red-500 rounded-full top-2 right-2"
                    onClick={handleClose}
                  >
                    <RiCloseFill />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>No se encontraron videos en esta categoría.</p>
        )}
      </section>
    </main>
  );
};

export default Categorias;

//*********** */
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { RiCloseFill } from "react-icons/ri";
// import ReactPlayer from "react-player";
// import { GiFlamer } from "react-icons/gi";

// const Categorias = () => {
//   const [videoVisible, setVideoVisible] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const handleBotonClick = (video) => {
//     setSelectedVideo(video);
//     setVideoVisible(true);
//   };

//   const handleClose = () => {
//     setSelectedVideo(null);
//     setVideoVisible(false);
//   };

//   const { categoria } = useParams();

//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const cargarVideos = async () => {
//       try {
//         const response = await fetch("../db.json");
//         const data = await response.json();
//         setVideos(data.videos.filter((video) => video.categoria === categoria));
//         console.log(
//           data.videos.filter((video) => video.categoria === categoria)
//         );
//       } catch (error) {
//         console.error("Error al cargar los videos:", error);
//       }
//     };
//     cargarVideos();
//   }, [categoria]);

//   return (
//     <main className="h-screen mb-36 sm:mb-80 md:-mb-36 2xl:mb-44">
//       <h2 className="flex items-center gap-2 px-5 px-10 py-4 text-xl font-semibold md:text-base lg:text-2xl 2xl:text-3xl lg:pl-64 2xl:pt-10">
//         <GiFlamer className="text-xl text-red-600 lg:text-2xl" /> {categoria}
//       </h2>

//       <section className="">
//         {videos && videos.length > 0 ? (
//           <div className="grid grid-cols-2 col-span-5 col-start-2 row-start-6 gap-4 px-4 pb-16 2xl: md:grid-cols-3 lg:pl-64">
//             {videos.map((video) => (
//               // eslint-disable-next-line react/jsx-key
//               <div className="flex flex-col items-center gap-1 p-2 shadow-xl bg-black/50 rounded-xl">
//                 <button
//                   key={video.name}
//                   onClick={() => handleBotonClick(video)}
//                   className="w-full shrink-0 snap-center "
//                 >
//                   <img
//                     className="shadow-lg rounded-xl"
//                     src={video.image}
//                     alt=""
//                   />
//                 </button>
//                 <h3 className="text-sm font-normal text-center">
//                   {video.name}
//                 </h3>
//               </div>
//             ))}

//             {videoVisible && selectedVideo && (
//               <div className=" z-[100] fixed inset-0 z-50 flex items-center justify-center w-full p-1 md:p-4 lg:p-5">
//                 <div className="relative flex items-center w-full video-player-container h-72 md:h-2/4 lg:h-full ">
//                   <ReactPlayer
//                     url={selectedVideo.url}
//                     width="100%"
//                     height="100%"
//                   />
//                   <button
//                     className="absolute p-2 bg-red-500 rounded-full top-2 right-2"
//                     onClick={handleClose}
//                   >
//                     <RiCloseFill />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p>No se encontraron videos en esta categoría.</p>
//         )}
//       </section>
//     </main>
//   );
// };
// export default Categorias;

//*************** */
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { RiCloseFill } from "react-icons/ri";
// import ReactPlayer from "react-player";

// const Categorias = () => {
//   const [videoVisible, setVideoVisible] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const handleBotonClick = (video) => {
//     setSelectedVideo(video);
//     setVideoVisible(true);
//   };

//   const handleClose = () => {
//     setSelectedVideo(null);
//     setVideoVisible(false);
//   };

//   const { categoria } = useParams();

//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const cargarVideos = async () => {
//       try {
//         const response = await fetch("../db.json");
//         const data = await response.json();
//         setVideos(data.videos.filter((video) => video.categoria === categoria));
//       } catch (error) {
//         console.error("Error al cargar los videos:", error);
//       }
//     };
//     cargarVideos();
//   }, [categoria]);
//   // useEffect(() => {
//   //   fetch("../db.json")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setVideos(data.videos);
//   //     });
//   // }, []);

//   return (
//     <main className="grid grid-cols-2 col-span-5 col-start-2 row-start-6 gap-4 px-4 pb-16 mt-20 2xl:mt-4 2xl: md:grid-cols-3 lg:pl-24">
//       <h2> {categoria}</h2>

//       {videos && videos.length > 0 ? (
//         <div>
//           {videos.map((video) => (
//             // eslint-disable-next-line react/jsx-key
//             <div className="flex flex-col items-center gap-1 p-2 shadow-xl bg-black/50 rounded-xl">
//               <button
//                 key={video.name}
//                 onClick={() => handleBotonClick(video)}
//                 className="w-full shrink-0 snap-center "
//               >
//                 <img
//                   className="shadow-lg rounded-xl"
//                   src={video.image}
//                   alt=""
//                 />
//               </button>
//               <h3 className="text-sm font-normal text-center">{video.name}</h3>
//             </div>
//           ))}

//           {videoVisible && selectedVideo && (
//             <div className=" z-[100] fixed inset-0 z-50 flex items-center justify-center w-full p-1 md:p-4 lg:p-5">
//               <div className="relative flex items-center w-full video-player-container h-72 md:h-2/4 lg:h-full ">
//                 <ReactPlayer
//                   url={selectedVideo.url}
//                   width="100%"
//                   height="100%"
//                 />
//                 <button
//                   className="absolute p-2 bg-red-500 rounded-full top-2 right-2"
//                   onClick={handleClose}
//                 >
//                   <RiCloseFill />
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>No se encontraron videos en esta categoría.</p>
//       )}
//     </main>
//   );
// };
// export default Categorias;

// const objetosData = {
//   tecnologia: [
//     { id: 1, nombre: "Laptop" },
//     { id: 2, nombre: "Teléfono" },
//     { id: 3, nombre: "Tableta" },
//   ],
//   hogar: [
//     { id: 4, nombre: "Sofá" },
//     { id: 5, nombre: "Mesa" },
//     { id: 6, nombre: "Lámpara" },
//   ],
//   moda: [
//     { id: 7, nombre: "Camiseta" },
//     { id: 8, nombre: "Pantalones" },
//     { id: 9, nombre: "Zapatos" },
//   ],
// };

// const Categorias = () => {
//   const { categoria } = useParams();

//   const objetos = objetosData[categoria];
//   return (
//     <div>
//       <h2>Objetos de la categoría {categoria}</h2>
//       {objetos && objetos.length > 0 ? (
//         <ul>
//           {objetos.map((objeto) => (
//             <li key={objeto.id}>{objeto.nombre}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron objetos en esta categoría.</p>
//       )}
//     </div>
//   );
// };

// export default Categorias;

{
  /* {videos.map((video) => (
    // eslint-disable-next-line react/jsx-key
    <div className="flex flex-col items-center gap-1 p-2 shadow-xl bg-black/50 rounded-xl">
      <button
        key={video.name}
        onClick={() => handleBotonClick(video)}
        className="w-full shrink-0 snap-center "
      >
        <img className="shadow-lg rounded-xl" src={video.image} alt="" />
      </button>
      <h3 className="text-sm font-normal text-center">{video.name}</h3>
    </div>
  ))}

  {videoVisible && selectedVideo && (
    <div className=" z-[100] fixed inset-0 z-50 flex items-center justify-center w-full p-1 md:p-4 lg:p-5">
      <div className="relative flex items-center w-full video-player-container h-72 md:h-2/4 lg:h-full ">
        <ReactPlayer url={selectedVideo.url} width="100%" height="100%" />
        <button
          className="absolute p-2 bg-red-500 rounded-full top-2 right-2"
          onClick={handleClose}
        >
          <RiCloseFill />
        </button>
      </div>
    </div>
  )} */
}
