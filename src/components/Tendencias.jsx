import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import ReactPlayer from "react-player";

const Tendencias = () => {
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

  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/OXQvk5-KVTw",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiguzKg1X8aSrr6slER9CSI57W0l7PLw6JT4TMkOTPr9I13Hh4J0ICb-2xYTlcutJzTaU&usqp=CAU",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/2rPPppw6Bhk",
      image:
        "https://images.hdqwalls.com/download/suzume-no-tojimari-dg-1920x1080.jpg",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/om2W4TW-1sc",
      image:
        "https://somoskudasai.com/wp-content/uploads/2022/11/portada_niehime-to-kemono-no-ou-7.jpg",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/wfoRaDv0umI",
      image:
        "https://i-amp.ex-cdn.com/mgn.vn/files/news/2022/09/28/anime-sorcerous-stabber-orphen-co-phan-thu-3-112119.jpg",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/z4x5P0H8Hnw",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTY4ZTU4ZjctYTQ1NC00NTNjLTg5ZjktNTdkNmJkMmJhNTkxXkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/lXpNoMtEIzk",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ9B06KWOhcyRdmo__cFA4J2clYYfM4NgEk2nFcUtslRo8MLnAKT01gT5adzIjZBvhlgWMuzspGIvWR4ZJ2vB3yTXKeQugw5ouIqbVeu2MFAbzG_rVvvYW9uwUwhGfdkk83CGwN_i0HOU__mv1Pxa3PSrVkVRSigxjG6t69cjVDs1qYjSfe0BNy4HTJA/s800/Dead-Mount-Death-1.jpg",
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/Rh8ZDQjBOR8",
      image: "https://cdn.myanimelist.net/images/anime/1296/133151l.jpg",
    },
  ];

  return (
    <div className="w-full flex gap-3 snap-x overflow-x-auto -mb-16 lg:-mb-0 lg:mt-2">
      {videos.map((video) => (
        <button
          key={video.id}
          onClick={() => handleBotonClick(video)}
          className="w-32 h-20  shrink-0 snap-center md:w-32 lg:w-36"
        >
          <img
            className="rounded-xl shadow-lg h-full w-full"
            src={video.image}
            alt=""
          />
        </button>
      ))}

      {videoVisible && selectedVideo && (
        <div className="absolute inset-0 flex items-center justify-center w-full p-1 md:p-4 lg:p-5 z-50">
          <div className="relative video-player-container flex items-center w-full h-72 md:h-2/4 lg:h-full">
            <ReactPlayer url={selectedVideo.url} width="100%" height="100%" />
            <button
              className="absolute top-2 right-2 bg-red-500 p-2 rounded-full"
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

export default Tendencias;

//******** */
// import { useState } from "react";
// import { RiCloseFill } from "react-icons/ri";
// import ReactPlayer from "react-player";

// const Tendencias = () => {
//   const [videos, setVideos] = useState([
//     {
//       id: 1,
//       url: "https://www.youtube.com/watch?v=pLBuFxMYkx8&ab_channel=BorjaScript",
//       image:
//         "https://www.anmosugoi.com/wp-content/uploads/2021/09/saekano-volumen-especial.jpg",
//     },
//     {
//       id: 2,
//       url: "https://www.youtube.com/embed/zHVCjEUUNOE",
//       image:
//         "https://www.anmosugoi.com/wp-content/uploads/2021/09/saekano-volumen-especial.jpg",
//     },
//     {
//       id: 3,
//       url: "https://www.youtube.com/watch?v=pLBuFxMYkx8&ab_channel=BorjaScript",
//       image:
//         "https://www.anmosugoi.com/wp-content/uploads/2021/09/saekano-volumen-especial.jpg",
//     },
//   ]);

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

//   return (
//     <div className="w-full flex gap-3 snap-x overflow-x-auto -mb-16">
//       {videos.map((video) => (
//         <button
//           key={video.id}
//           onClick={() => handleBotonClick(video)}
//           className="w-28 h-20 shrink-0 snap-center"
//         >
//           <img className="rounded-xl shadow-lg" src={video.image} alt="" />
//         </button>
//       ))}

//       {videoVisible && selectedVideo && (
//         <div className="absolute inset-0 flex items-center justify-center w-full p-1 md:p-4 lg:p-5 z-50">
//           <div className="relative video-player-container flex items-center w-full h-72 md:h-2/4 lg:h-full">
//             <ReactPlayer url={selectedVideo.url} width="100%" height="100%" />
//             <button
//               className="absolute top-2 right-2 bg-red-500 p-2 rounded-full"
//               onClick={handleClose}
//             >
//               <RiCloseFill />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tendencias;

//*********************************************************** */

// import { useState } from "react";
// import { RiCloseFill } from "react-icons/ri";
// import ReactPlayer from "react-player";
// const Tendencias = () => {
//   const [videos, setVideos] = useState([
//     {
//       id: 1,
//       url: "https://www.youtube.com/watch?v=pLBuFxMYkx8&ab_channel=BorjaScript", // Reemplaza 'VIDEO_URL_1' con la URL del primer video
//       image:
//         "https://www.anmosugoi.com/wp-content/uploads/2021/09/saekano-volumen-especial.jpg", // Reemplaza 'IMAGE_URL_1' con la URL de la imagen del primer video
//     },
//     {
//       id: 2,
//       url: "https://www.youtube.com/watch?v=pLBuFxMYkx8&ab_channel=BorjaScript", // Reemplaza 'VIDEO_URL_2' con la URL del segundo video
//       image:
//         "https://www.anmosugoi.com/wp-content/uploads/2021/09/saekano-volumen-especial.jpg", // Reemplaza 'IMAGE_URL_2' con la URL de la imagen del segundo video
//     },
//   ]);

//   const [videoVisible, setVideoVisible] = useState(false);

//   const handleBotonClick = () => {
//     setVideoVisible(!videoVisible);
//   };

//   const handleClose = () => {
//     setVideoVisible(!videoVisible);
//     setVideos(videos.map((video) => ({ ...video, isPlaying: false })));
//   };

//   return (
//     <div className=" w-full flex gap-3 snap-x overflow-x-auto -mb-16">
//       {videos.map((video, index) => {
//         <button
//           onClick={handleBotonClick}
//           className="w-28 h-20 shrink-0  snap-center"
//         >
//           <img
//             key={index}
//             className="rounded-xl shadow-lg"
//             src={video.image}
//             alt=""
//           />
//         </button>;
//         {
//           videoVisible && (
//             <div className=" absolute inset-0 flex items-center justify-center w-full p-1 md:p-4 lg:p-5 z-50">
//               <div className=" relative video-player-container flex items-center w-full h-72 md:h-2/4 lg:h-full ">
//                 <ReactPlayer
//                   url="https://www.youtube.com/embed/zHVCjEUUNOE"
//                   width="100%"
//                   height="100%"
//                 />
//                 <button
//                   className="absolute top-2 right-2 bg-red-500 p-2 rounded-full"
//                   onClick={handleClose}
//                 >
//                   <RiCloseFill />
//                 </button>
//               </div>
//             </div>
//           );
//         }
//       })}

//       {/* <button className="w-28 h-20 shrink-0  snap-center ">
//         <img className="rounded-xl shadow-lg" src={video.image} alt="" />
//       </button>
//       <button className="w-28 h-20 shrink-0  snap-center">
//         <img
//           className="rounded-xl shadow-lg"
//           src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/mejores-animes-temporada-primavera-2022.jpg"
//           alt=""
//         />
//       </button>
//       <button className="w-28 h-20 shrink-0  snap-center">
//         <img
//           className="rounded-xl shadow-lg"
//           src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/mejores-animes-temporada-primavera-2022.jpg"
//           alt=""
//         />
//       </button> */}
//     </div>
//   );
// };

// export default Tendencias;
